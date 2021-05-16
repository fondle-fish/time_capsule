import React, { Component } from 'react'
import { Button, View, Image } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import './index.css'
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

    render() {
        return (
            <View className='b' >
                <Image className='bc' src={bc}></Image>
                <Image className='location1' onClick={this.warning} src={lc}></Image>
                <Image className='location2' onClick={this.warning} src={lc}></Image>
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