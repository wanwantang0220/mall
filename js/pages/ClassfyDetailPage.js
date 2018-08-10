import React, {PureComponent} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {Genk_Cate_Types} from "../style/BaseContant";
import {BackgroundColorLight, BaseStyles, BlackTextColor, MainColor, ToolColor, White} from "../style/BaseStyle";
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import mainStyles from "../style/Css";
import NaviBarView from "../component/NaviBarView";
import CateroyListPage from "./CateroyListPage";
import LinearGradient from "react-native-linear-gradient";
import {width} from "../util/ScreenUtil";


export default class ClassfyDetailPage extends PureComponent {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <View style={[mainStyles.container]}>
                {/*状态栏*/}
                <StatusBar
                    animated={true}
                    backgroundColor={ToolColor}
                    barStyle='light-content'/>
                <NaviBarView backgroundColor={ToolColor}/>
                <View style={[mainStyles.toolbar, {backgroundColor: MainColor}]}>
                    <TouchableOpacity
                        style={{paddingStart: 15}}
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}>
                        <Image
                            style={BaseStyles.baseIcon}
                            source={require('../images/icon_back.png')}/>
                    </TouchableOpacity>
                    <View style={mainStyles.toolbar_middle}>
                        <Text style={mainStyles.toolbar_middle_text}>tab使用</Text>
                    </View>
                </View>
                <LinearGradient colors={[BackgroundColorLight, White]} style={mainStyles.lineargradient}>
                </LinearGradient>
                <ScrollableTabView
                    tabBarInactiveTextColor={BlackTextColor} // 没有被选中的文字颜色
                    tabBarActiveTextColor={BlackTextColor}       // 选中的文字颜色
                    tabBarBackgroundColor={White}     // 选项卡背景颜色
                    tabBarUnderlineStyle={{backgroundColor: '#FF0000', height: 1}}   //下划线的样式
                    initialPage={0}
                    renderTabBar={() =>
                        <ScrollableTabBar
                            style={{width: width, height: 40, borderWidth: 0, elevation: 2}}
                            tabStyle={{height: 39}}
                            underlineHeight={2}/>}>

                    {this.getScrollTab()}

                </ScrollableTabView>
            </View>
        )
    }


    getScrollTab() {
        return Genk_Cate_Types.map((item, i) => {
            return (
                <CateroyListPage tabLabel={item} title={item}/>
            );
        });

    }

}
