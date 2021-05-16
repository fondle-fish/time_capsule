import React, { Component } from 'react'
import { View, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
// import { AtButton } from 'taro-ui'
import './index.css'
import { navigateTo } from '@tarojs/taro'


export default class items extends Component {
     state={
         context:[],
         time:[]
     }
    toDetail = () => {
        Taro.redirectTo({
            url: '/pages/bury/index'
        })
    };
    render() {
        return (
            <View className='index' onClick={this.toDetail}>
                <View className=''>
                    <View className='text'></View>
                    <View className='time'></View>
                </View>

            </View>
        )
    }
}