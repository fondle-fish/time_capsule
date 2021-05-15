import React, { Component } from 'react'
import { View } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import './index.css'
import  Taro  from '@tarojs/taro'


export default class Index extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    toLogin =()=>{
        Taro.navigateTo({url:'/pages/login/index'})
    }

    render() {
        return (
            <View className='index'>
                <View className='text'>
                    <View className='wuli'>我是武小理</View>
                    <View className='huashi' onClick={this.toLogin}>我是华小师</View>
                </View>
            </View>
        )
    }
}