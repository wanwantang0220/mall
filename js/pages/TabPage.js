import React from 'react';

import {Dimensions, Image, View} from "react-native";
import color from "../style/ColorStyle";
import {createBottomTabNavigator} from "react-navigation";
import HomePage from "./HomePage";
import ClassfyPage from "./ClassfyPage";
import ChartPage from "./ChartPage";
import SettingPage from "./SettingPage";


const Tab = createBottomTabNavigator({
    Home: {
        screen: HomePage,
    },
    Classfy: {
        screen: ClassfyPage,
    },
    Chart: {
        screen: ChartPage,
    },
    Setting: {
        screen: SettingPage,
    }
}, {
    // navigationOptions: ({navigation}) => ({
    //     tabBarIcon: ({focused, tintColor}) => {
    //         const {routeName} = navigation.state;
    //         let iconName;
    //         if (routeName === 'First') {
    //             iconName = `ios-home${focused ? '' : '-outline'}`;
    //         } else if (routeName === 'Second') {
    //             iconName = `ios-options${focused ? '' : '-outline'}`;
    //         }
    //
    //         // 在此处可以返回任何组件！
    //         // 我们通常使用react-native-vector-icons中的图标组件
    //         return <Ionicons name={iconName} size={25} color={tintColor}/>;
    //     },
    // }),

    animationEnabled: true,
    swipeEnabled: false,
    swipeEnabled: true,//是否可以滑动切换
    animationEnabled: true,//切换是否有动画
    initialRouteName: 'Home', //进入App的首页面
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: { //对于导航的设置
        indicatorStyle: {height: 0},  //android特有下划线的颜色1
        inactiveTintColor: '#a9a9a9', // 文字和图片默认颜色
        activeTintColor: color.activeBarText,
        labelStyle: {     //文字的样式
            fontSize: 10,
            // marginTop: 5,
            textAlign: 'center',
            // paddingTop:10
        },
        style: {    //对于导航的stytles
            backgroundColor: 'white', // TabBar 背景色
            borderTopColor: '#ebebeb',
            borderTopWidth: 1,
            height: Dimensions.get('window').height * 0.08,
            height: 50
        }
    },
    // navigationOptions: ({navigation}) => ({
    //     title: navigation.state.routeName,
    //     titleColor:color.activeBarText,
    //     headerStyle: {backgroundColor: '#000000',},
    //     headerTintColor: color.activeBarText,
    //     headerTitleStyle: {fontWeight: 'bold',},
    //     header: {  // 导航栏相关设置项
    //         backTitle: '返回',  // 左上角返回键文字
    //         style: {
    //             backgroundColor: '#fff'
    //         },
    //         titleStyle: {
    //             color: 'green'
    //         }
    //     },
    //     cardStack: {
    //         gesturesEnabled: false  // 是否可以右滑返回
    //     }
    // }),
    // mode: 'card',
});
//
Tab.navigationOptions = ({navigation}) => {
    // let {routeName} = navigation.state.routes[navigation.state.index];
    //
    // console.log(routeName);
    // let headerTitle;
    // if (routeName == 'Home') {
    //     headerTitle = '首页';
    // } else if (routeName == 'Classfy') {
    //     headerTitle = '分类';
    // } else if (routeName == 'Chart') {
    //     headerTitle = '购物车'
    // } else if (routeName == 'Setting') {
    //     headerTitle = '设置';
    // }
    //
    // return {
    //     headerTitle,
    // };

    return{
        header: null,
    }

};

export default Tab;