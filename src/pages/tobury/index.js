import React, { Component } from 'react'
import { View, Button, Textarea } from '@tarojs/components'
//import { AtButton } from 'taro-ui'
import Rule from '../rule/index'
import './index.css'

export default class login extends Component {
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }


    render() {
        return (
            <View className='bc'>
                <Rule></Rule>
                <View className='text'>
                    <View className='ta'><Textarea className='tac'  ></Textarea></View>
                </View>
                <Button className='tobury'>
                    去埋藏我的时间胶囊
            </Button >
            </View >
        )
    }
}