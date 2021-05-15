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
                <View className='bottom'>
                    <View className='text'>
                        听说选择具有标志性的地方更有可能被挖到哦
                    </View>
                    <View className='sure'>
                        <Button>我知道啦！</Button>
                    </View>
                </View>
            </View>
        )
    }
}