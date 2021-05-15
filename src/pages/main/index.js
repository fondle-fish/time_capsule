import React, { Component } from 'react'
import { Button, View, Image } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import './index.css'
import lc from './images/lc.png'
import Rule from '../rule/index'
import {navigateto} from '@tarojs/taro'


export default class examine extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    toBury=()=>{
        Taro.navigateTo({url:'/pages/bury/index'})
    }

    render() {
        return (
            <View className='bc'>
                <Image className='location1' src={lc}></Image>
                <Image className='location2' src={lc}></Image>
                <Image className='location3' src={lc}></Image>

                <Rule></Rule>
                <Button className='tobury' onClick={this.toBury}>
                    去埋藏我的时间胶囊
            </Button >
            </View>
        )
    }

}