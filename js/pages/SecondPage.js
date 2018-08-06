/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";


export default class SecondPage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: 'SecondPage',
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
