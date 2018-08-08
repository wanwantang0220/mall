import React, {PureComponent} from 'react';
import {
    ActivityIndicator, Dimensions, FlatList, Image, ScrollView, StatusBar, Text, TouchableOpacity,
    View
} from "react-native";
import {Default_Photos} from "../style/BaseContant";
import {MainColor} from "../style/BaseStyle";


export default class CommentLongPage extends PureComponent {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <Text>hello</Text>
        )
    }
}
