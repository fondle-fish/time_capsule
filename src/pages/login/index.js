import React, { Component } from 'react'
import { View, Image, Input, Button } from '@tarojs/components'
//import { AtButton } from 'taro-ui'
import './index.css'

export default class login extends Component {
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className='index'>
                <View className='border'>
                    <View className='input'>
                        <View className='h'>我是华小师</View>
                        <View className='input_text'>
                            <View>&nbsp;&nbsp;校园卡号</View> <View><Input className='weui-input' type='text'></Input></View>
                        </View>
                        <View className='input_text'>
                            <View>&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码&nbsp;&nbsp;</View><View><Input className='weui-input' type='password'></Input></View>
                        </View>
                        <View className='t'>密码为身份证后六位或一站式门户密码</View>
                    </View>
                </View>
                <View className='button'>
                    <Button className='button1'>&nbsp;&nbsp;确定！</Button>
                </View>
            </View>
        )
    }
}