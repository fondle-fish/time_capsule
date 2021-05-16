import React, { Component, useImperativeHandle } from 'react'
import { View , Image, Input} from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import './index.css'
import { navigateTo } from '@tarojs/taro'
import wh from './images/wh.png'
import Items from './items/items'
import Rule from '../rule/index'
import Service from '../../commen/service'


export default class examine extends Component {

    state={
        date:[]
    }
    componentDidMount(){
        let userid='';
        Taro.getStorage({
            key: 'userid',
            success: function (res) {
              console.log(res);
              userid=res.data;
            }
          })
        Service.own_timecap(userid).then(res=>{
            console.log(res);
            this.setState({
                date:res,
            })

        })  
    }

    render() {
        console.log(this.state.data)
        return (
            <View>
                <View className='bc'>
                    {/* <Image className='wh' src={wh}></Image> */}
                    <Rule></Rule>
                    <View className='border'>
                        <Input className='h1'>我挖到的时间胶囊</Input>
                        {this.state.date.map((dateobj)=>{ return <Items key={dateobj.capsuleId} {...dateobj} ></Items>})}
                    </View>
                    <View className='border'>
                        <Input className='h1'>我埋下的时间胶囊</Input>
                        <Items className='items'></Items>
                    </View>
                </View>
            </View>
        )
    }

}