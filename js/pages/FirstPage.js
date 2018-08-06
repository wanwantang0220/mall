/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";


export default class FirstPage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: 'FirstPage',
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

const styles = StyleSheet.create({

});
