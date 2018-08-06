/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";


export default class ForthPage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: 'ForthPage',
    };

    componentWillUpdate() {
    };

    componentDidUpdate() {
    }

    render() {

        return (
            <View>
                <Text>ForthPage</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});
