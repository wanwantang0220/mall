/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {ActivityIndicator, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ColorStart, MainColor, ToolColor, WhiteTextColor} from "../style/BaseStyle";
import mainStyles from "../style/Css";
import LinearGradient from "react-native-linear-gradient";

import httpUrl from "../http/HttpUrl";
import NaviBarView from "../component/NaviBarView";
import {jumpPager} from "../util/Utils";


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
                    <View style={[mainStyles.toolbar, {backgroundColor: MainColor}]}>
                        <View style={mainStyles.toolbar_middle}>
                            <Text style={mainStyles.toolbar_middle_text}>Gank-接口 分类</Text>
                        </View>
                    </View>

                    {/*推荐栏*/}
                    <View style={mainStyles.recommend_view}>
                        {this.renderItemView()}
                    </View>

                </View>
            )
        }
    }


    renderItemView() {
        const mTabs = this.state.mList;
        return mTabs.map((item, i) => {
            return (
                <TouchableOpacity
                    activeOpacity={0.8}
                    key={i}
                    onPress={() => {
                        jumpPager(this.props.navigation.navigate, 'ClassfyDetail', null);
                    }}>
                    <View style={mainStyles.recommend_view_item}>
                        <Text style={[mainStyles.recommend_view_item_text, {color: ColorStart}]}>{item}</Text>
                    </View>
                </TouchableOpacity>
            )
        });
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
