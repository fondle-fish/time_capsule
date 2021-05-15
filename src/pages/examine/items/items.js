import React, { Component } from 'react'
import { View, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
// import { AtButton } from 'taro-ui'
import './index.css'
import { navigateTo } from '@tarojs/taro'

export default class items extends Component {
    // state={
    //     context:[],
    //     time:[]
    // }
    toDetail = () => {
        Taro.navigateTo({
            url: '/pages/bury/index'
        })
    };
    render() {
        return (
            <View className='index' onClick={this.toDetail}>
                <View className=''>
                    <View className='text'>在蔚蓝的天空中，飘浮着洁白的云彩，有的 云像一匹洁白的骏马在天空奔驰。有的云像 一只轻灵的鸽子，二十个字内.....</View>
                    <View className='time'>2021.5.15 22:25</View>
                </View>

            </View>
        )
    }
}