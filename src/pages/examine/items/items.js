import React, { Component } from 'react'
import { View, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
// import { AtButton } from 'taro-ui'
import './index.css'
import { navigateTo } from '@tarojs/taro'


export default class items extends Component {
     
    toDetail = () => {
        Taro.redirectTo({
            url: '/pages/bury/index'
        })
    };
    render() {
        const{story,time}=this.props
        return (
            <View className='index' onClick={this.toDetail}>
                <View className=''>
                    <View className='text'>{story}</View>
                    <View className='time'>{time}</View>
                </View>

            </View>
        )
    }
}