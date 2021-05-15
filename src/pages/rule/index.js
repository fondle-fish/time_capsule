import React, { Component } from 'react'
import { View, Image, Text, Button } from '@tarojs/components'
//import { AtButton } from 'taro-ui'
import wenhao from './images/问号.png'
import './index.css'

export default class login extends Component {
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    state = {
        islooked: true,
    }
    lookRole = () => { this.setState({ islooked: !this.state.islooked }) };

    render() {
        return (
            <View className='index'>
                <Image onClick={this.lookRole} className='wenhao' src={wenhao}></Image>
                <View className='role' style={{ display: this.state.islooked ? 'none' : 'block' }}>
                    <Text className='h'>规则</Text>
                    <View className="details">1.选择您想要挖取时间胶囊的地点进行挖取;<br></br>
                    2.埋下我的时间胶囊:填写内容，选择时间:<br></br>
                    </View>
                </View>
            </View >
        )
    }
}