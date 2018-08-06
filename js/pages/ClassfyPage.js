/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";


export default class ClassfyPage extends Component {

    static navigationOptions = {
        //标题
        title:'分类',
        drawerLabel: '分类',

        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
            alignSelf:'center'
        },
        headerRight: <View/>
    };

    componentWillUpdate() {
    };

    componentDidUpdate() {
    }

    render() {

        return (
            <View>
                <Text>SecondPage</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});
