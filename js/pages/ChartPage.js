/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import color from "../style/ColorStyle";
import {jumpPager} from "../util/Utils";


export default class ChartPage extends Component {

    static navigationOptions = {
        //标题
        title:'插件',
        drawerLabel: '插件',
        tabBarIcon: ({focused}) => {
            // 根据是否选中，显示不同图片
            const icon = focused
                ? require('../images/icon_shop_cart_active.png')
                : require('../images/icon_shop_cart.png');
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
                <TouchableOpacity
                    onPress={()=>
                        jumpPager(this.props.navigation.navigate, "Lottie", null)
                    }>
                    <View>
                        <Text>插件-lottie</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});
