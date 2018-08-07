/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";
import color from "../style/ColorStyle";
import HeaderTitle from "../component/HeaderTitle";


export default class HomePage extends Component {


    static navigationOptions = (navigation) => ({
        tabBarIcon: ({focused}) => {
            // 根据是否选中，显示不同图片
            const icon = focused
                ? require('../images/icon_home_active.png')
                : require('../images/icon_home.png');
            return <Image source={icon} style={{height: 22, width: 22}}/>;
        },
        //标题
        headerTitle: '首页',
        drawerLabel: '首页',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
            alignSelf: 'center',
            fontWeight: 'bold',
            color: 'red',
            backgroundColor: color.activeBarText,
            width: Dimensions.get('window').width,
        },

        headerRight: (<View/>),
        headerLeft: (<View/>),
        headerStyle: {
            backgroundColor: 'yellow'
        },
        headerBackTitleStyle: {
            tintColor: '#789'
        },
        headerTintColor: '#956',
        cardStack: {
            gesturesEnabled: false  // 是否可以右滑返回
        }
    });

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
