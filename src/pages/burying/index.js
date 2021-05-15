import React, { Component } from 'react'
import { Button, View, Image } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import './index.css'
import burying from './images/burying.gif'
import bc from './images/bc-main.png'
import lc from './images/lc.png'
import Rule from '../rule/index'
import Taro from '@tarojs/taro'



export default class examine extends Component {


    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    toBury = () => {
        Taro.navigateTo({ url: '/pages/tobury/index' })
    }
    warning = () => {
        Taro.navigateTo({
            url: '/pages/warnning/index'
        })
    };
    manager = () => {
        Taro.navigateTo({
            url: '/pages/examine/index'
        })
    };

    render() {
        return (
            <View className='b' >
                <Image className='bc' src={bc}></Image>
                <Image className='location1' onClick={this.warning} src={lc}></Image>
                <Image className='burying1' src={burying}></Image>
                <Image className='burying2' src={burying}></Image>
                <Image className='location2' onClick={this.warning} src={lc}></Image>
                <Image className='burying3' src={burying}></Image>
                <Image className='location3' onClick={this.warning} src={lc}></Image>
                <Rule></Rule>
                <View onClick={this.manager} className='manager'>管理我的时间胶囊</View>
                <View className='tobury' onClick={this.toBury}>
                    去埋藏我的时间胶囊
                </View >
            </View>
        )
    }

}
