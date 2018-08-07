/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";
import color from "../style/ColorStyle";


export default class ChartPage extends Component {

    static navigationOptions = {
        //标题
        title:'购物车',
        drawerLabel: '购物车',
        tabBarIcon: ({focused}) => {
            // 根据是否选中，显示不同图片
            const icon = focused
                ? require('../images/icon_shop_cart_active.png')
                : require('../images/icon_shop_cart.png');
            return <Image source={icon} style={{height: 22, width: 22}}/>;
        },
        headerTintColor: color.activeBarText,
    };

    componentWillUpdate() {
    };

    componentDidUpdate() {
    }

    render() {

        return (
            <View>
                <Text>ThirdPage</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});
