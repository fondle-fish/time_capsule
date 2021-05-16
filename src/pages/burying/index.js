import React, { Component } from 'react'
import { Button, View, Image } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import './index.css'
import burying from './images/burying.gif'
import bc from './images/bc-main.png'
import lc from './images/lc.png'
import Rule from '../rule/index'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import Service from '../../commen/service'
export default class burying1 extends Component {
    constructor(props){
        super(props)
        this.state={
            story:'',
            address:''
        }
    }
    
    componentDidMount(){
        let story = decodeURIComponent(getCurrentInstance().router.params.story)
         this.setState({story:story})
         console.log(this.state)
    }

    toBury = () => {
        Taro.redirectTo({ url: '/pages/tobury/index' })
    }
    warning = () => {
        Taro.redirectTo({
            url: '/pages/warnning/index'
        })
    };
    manager = () => {
        Taro.redirectTo({
            url: '/pages/examine/index'
        })
    };

    add = (x)=>{
        let userid='';
        let story=this.state.story;
        Taro.getStorage({
            key: 'userid',
            success: function (res) {
              console.log(res);
              userid=res.data;
            }
          })
        this.setState({
            address:x,
        })
        console.log(this.state)
        let address=this.state.address;
       Service.add_timecap(userid,story,address)
    }

    render() {
        return (
            <View className='b' >
                <Image className='bc' src={bc}></Image>
                <Image className='location1' onClick={this.warning} src={lc}></Image>
                <Image className='burying1' src={burying} onClick={()=>this.add('1') }></Image>
                <Image className='burying2' src={burying} onClick={()=>this.add('2')}></Image>
                <Image className='location2' onClick={this.warning} src={lc}></Image>
                <Image className='burying3' src={burying} onClick={()=>this.add('3')}></Image>
                <Image className='location3' onClick={this.warning} src={lc}></Image>
                <Rule></Rule>
                <View onClick={this.manager} className='manager'>管理我的时间胶囊</View>
                <View className='tobury' onClick={this.toBury}>
                    更改我的时间胶囊
                </View >
            </View>
        )
    }

}
