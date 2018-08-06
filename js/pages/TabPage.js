import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import ForthPage from "./ForthPage";
import {Dimensions} from "react-native";
import color from "../style/ColorStyle";
import {createBottomTabNavigator} from "react-navigation";


export default Tab = createBottomTabNavigator({
    First: {
        screen: FirstPage
    },
    Second: {
        screen: SecondPage
    },
    Third: {
        screen: ThirdPage
    },
    Forth: {
        screen: ForthPage
    }
}, {
    tabBarOptions: {
        activeTintColor: color.primary,
        inactiveTintColor: color.gray,
    },
    animationEnabled: true,
    swipeEnabled: false,
    swipeEnabled: true,//是否可以滑动切换
    animationEnabled: true,//切换是否有动画
    initialRouteName: 'First', //进入App的首页面
    tabBarOptions: { //对于导航的设置
        indicatorStyle: {height: 0},  //android特有下划线的颜色1
        labelStyle: {     //文字的样式
            fontSize: 10
        },
        style: {    //对于导航的stytles
            borderTopColor: '#ebebeb',
            borderTopWidth: 1,
            backgroundColor: 'white',
            height: Dimensions.get('window').height * 0.08,
        }
    }
});