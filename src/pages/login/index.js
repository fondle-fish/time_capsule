import React, { Component } from 'react'
import { View, Image, Input, Button } from '@tarojs/components'
//import { AtButton } from 'taro-ui'
import './index.css'

export default class login extends  Component{
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className='index'>
                <View className='border'>
                    <View className='h'>我是华小师</View>
                </View>
                <View className='button'>
                    <Button >确定！</Button>
                </View>
            </View>
        )
    }
}