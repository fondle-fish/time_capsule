import React, { Component } from 'react'
import { View , Image, Input} from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import './index.css'
import { navigateTo } from '@tarojs/taro'
import wh from './images/wh.png'
import Items from './items/items'


export default class examine extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View>
                <View className='bc'>
                    <Image className='wh' src={wh}></Image>
                    <View className='border'>
                        <Input className='h'>我挖到的时间胶囊</Input>
                        <Items></Items>
                    </View>
                    <View className='border'>
                        <Input className='h'>我埋下的时间胶囊</Input>
                        <Items className='items'></Items>
                    </View>
                </View>
            </View>
        )
    }

}