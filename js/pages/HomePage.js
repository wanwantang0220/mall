/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";


export default class HomePage extends Component {


    static navigationOptions = {
        //标题
        title:'首页',
        drawerLabel: 'FirstPage',
        tabBarIcon: ({focused}) => {
            // 根据是否选中，显示不同图片
            const icon = focused
                ? require('../images/icon_home_active.png')
                : require('../images/icon_home.png');
            return <Image source={icon} style={{height: 22, width: 22}}/>;
        },
    };

    componentWillUpdate() {
    };

    componentDidUpdate() {
    }

    render() {

        return (
            <View>
                <Text>FirstPage</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({});
