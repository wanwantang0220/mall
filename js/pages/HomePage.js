/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";


export default class HomePage extends Component {


    static navigationOptions = (navigation) => ({
        //标题
        title: '首页',
        drawerLabel: '首页',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
            alignSelf:'center',
            width:Dimensions.get('window').width,
        },
        headerRight: (<View />),
        headerLeft: (<View />),
        headerBackTitle: null,
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
