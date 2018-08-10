/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, ActivityIndicator, TouchableOpacity, StatusBar} from "react-native";
import {BlackTextColor, MainColor, ToolColor, White, WhiteTextColor} from "../style/BaseStyle";
import mainStyles from "../style/Css";
import LinearGradient from "react-native-linear-gradient";
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import TestPage from "./TestPage";

import httpUrl from "../http/HttpUrl";
import NaviBarView from "../component/NaviBarView";


export default class ClassfyPage extends Component {

    static navigationOptions = {
        tabBarIcon: ({focused}) => {
            // 根据是否选中，显示不同图片
            const icon = focused
                ? require('../images/icon_classify_active.png')
                : require('../images/icon_classify.png');
            return <Image source={icon} style={{height: 22, width: 22}}/>;
        },
        //标题
        title: '分类',
        drawerLabel: '分类',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
            alignSelf: 'center'
        },
        headerRight: <View/>
    };

    constructor(props) {
        super(props);
        this.state = {
            mList: null,
            name: '',
            isInitSuccess: true,
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
                            color={MainColor}
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
                <View style={[mainStyles.container]}>
                    {/*状态栏*/}
                    <StatusBar
                        animated={true}
                        backgroundColor={ToolColor}
                        barStyle='light-content'/>
                    <NaviBarView backgroundColor={ToolColor}/>
                    <View style={[mainStyles.container]}>
                        <ScrollableTabView
                            tabBarInactiveTextColor={BlackTextColor} // 没有被选中的文字颜色
                            tabBarActiveTextColor={BlackTextColor}       // 选中的文字颜色
                            tabBarBackgroundColor={White}     // 选项卡背景颜色
                            tabBarUnderlineStyle={{backgroundColor: '#FF0000', height: 1}}   //下划线的样式
                            initialPage={0}
                            renderTabBar={() =>
                                <ScrollableTabBar
                                    style={{height: 40, borderWidth: 0, elevation: 2}}
                                    tabStyle={{height: 39}}
                                    underlineHeight={2}/>}>

                            <TestPage tabLabel="收件"/>
                            {/*<AddressSenderPage tabLabel="    发件    " navigator={navigator}/>*/}
                        </ScrollableTabView>
                    </View>
                </View>
            )
        }
    }


    async getList() {

        const list = await httpUrl.getGankToday({
            query: {}
        });

        let mlist = await list.json();
        if (mlist != null) {
            this.setState({
                mList: mlist.category,
                isInitSuccess: true,
            })
        } else {
            this.setState({
                isInitSuccess: false
            })
        }

        console.log(this.state.mList);

    }
}

const styles = StyleSheet.create({});
