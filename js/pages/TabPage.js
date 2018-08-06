import FirstPage from "./HomePage";
import SecondPage from "./ClassfyPage";
import ThirdPage from "./ChartPage";
import ForthPage from "./SettingPage";
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
    navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state;
            let iconName;
            if (routeName === 'First') {
                iconName = `ios-home${focused ? '' : '-outline'}`;
            } else if (routeName === 'Second') {
                iconName = `ios-options${focused ? '' : '-outline'}`;
            }

            // 在此处可以返回任何组件！
            // 我们通常使用react-native-vector-icons中的图标组件
            return <Ionicons name={iconName} size={25} color={tintColor}/>;
        },
    }),
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