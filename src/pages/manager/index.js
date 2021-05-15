import React, { Component } from 'react'
import { View, Image, Text, Button } from '@tarojs/components'
//import { AtButton } from 'taro-ui'
import wenhao from './images/问号.png'
import './index.css'
import Rule from '../rule/index'

export default class login extends Component {
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className='index'>
                {/* <Image className='wenhao' src={wenhao}></Image> */}
                <Rule></Rule>
                <View className='tobury'>
                    <Text>空空如也～<br></br></Text>
                    <Text>快去埋下你的时间胶囊<br></br></Text>
                    <Text>记录下专属于你的回忆吧～</Text>
                    <Button className='button'>去埋葬我的时间胶囊</Button>
                </View>

            </View>
        )
    }
}