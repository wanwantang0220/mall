/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";


export default class ThirdPage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: 'ThirdPage',
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
