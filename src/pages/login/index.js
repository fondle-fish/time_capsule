import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import './index.css'
import img from './images/login.png'


export default class Index extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className='index'>
                <View className='text'>
                    <View className='wuli'>我是武小理</View>
                    <View className='huashi'>我是华小师</View>
                </View>
            </View>
        )
    }
}