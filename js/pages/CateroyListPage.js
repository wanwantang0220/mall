import React, {PureComponent} from 'react';
import {ActivityIndicator, FlatList, Text, TouchableOpacity, View} from "react-native";


import PropTypes from 'prop-types';
import {MainColor, WhiteTextColor} from "../style/BaseStyle";
import LinearGradient from "react-native-linear-gradient";
import mainStyles from "../style/Css";
import httpUrl from "../http/HttpUrl";


export default class CateroyListPage extends PureComponent {

    static navigationOptions = {
        header: null,
    };


    static propTypes = {
        title: PropTypes.string,
    };


    constructor(props) {
        super(props);
        this.state = {
            mList: null,
            isInitSuccess: true,
            pagecount: 10,
            page: 1
        };
    }

    async componentDidMount() {
        this.getList();
    }


    render() {

        if (this.state.mList == null) {
            return (
                this.state.isInitSuccess ? (
                    <LinearGradient style={mainStyles.loading_view} colors={[MainColor, WhiteTextColor]}>
                        <ActivityIndicator
                            animating={true}
                            color={this.state.MainColor}
                            size='large'/>
                        <Text style={[mainStyles.loading_text, {color: MainColor}]}>loading</Text>
                    </LinearGradient>
                ) : (
                    <LinearGradient style={mainStyles.loading_view} colors={[MainColor, WhiteTextColor]}>
                        <TouchableOpacity onPress={() => {
                            this.setState({isInitSuccess: true});
                        }}>
                            <Text style={[mainStyles.reload_view, {
                                color: this.state.MainColor,
                                borderColor: this.state.MainColor,
                            }]}>reloading</Text>
                        </TouchableOpacity>
                    </LinearGradient>)
            )
        } else {
            return (
                <FlatList
                    data={this.state.mList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (this.renderHotItemView(item))}
                    showsVerticalScrollIndicator={false}
                />
            )
        }

    }


    renderHotItemView(item) {
        return (
            <View style={{margin:10}}>

                <Text style={{margin: 5}}>{item.desc}</Text>
                <View style={[mainStyles.line, {}]}/>

            </View>
        )
    }

    async getList() {
        const title = this.props.title;

        const list = await  httpUrl.getGankTypeContent({
            type: title,
            pagecount: 10,
            page: 1
        });

        let clist = await list.json();
        if (clist != null) {
            if (clist.results.length > 0) {
                this.setState({
                    mList: clist.results
                })
            }
        }

    }


}
