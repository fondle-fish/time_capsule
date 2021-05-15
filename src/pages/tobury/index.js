import React, { Component } from 'react'
import { View, Button, Textarea, Image } from '@tarojs/components'
//import { AtButton } from 'taro-ui'
import bct from './images/bc2.png'
import Rule from '../rule/index'
import './index.css'
import Taro from '@tarojs/taro'
import { navigateto } from '@tarojs/taro'

export default class login extends Component {
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    gomain = () => {
        Taro.navigateTo({ url: '/pages/burying/index' })
    }
    render() {
        return (
            <Image src={bct} className='bc'>
                <Rule></Rule>
                <View className='text'>
                    <View className='ta'><Textarea className='tac'  ></Textarea></View>
                </View>
                <Button onClick={this.gomain} className='tobury'>
                    去埋藏我的时间胶囊
            </Button >
            </Image>
        )
    }
}