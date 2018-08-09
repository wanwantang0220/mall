import React, {PureComponent} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {SharedElement} from "react-native-motion";
import mainStyles from "../style/Css";
import NaviBarView from "../component/NaviBarView";
import {BaseStyles, BlackTextColor, ColorTextGrey, ColorTextGrey2, MainColor, ToolColor} from "../style/BaseStyle";
import {width} from "../util/ScreenUtil";


export default class SharedInfoPage extends PureComponent {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            isInitSuccess: true,
        };
    }


    render() {
        const item = this.props.navigation.state.params.data;

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
                        <Text style={mainStyles.toolbar_middle_text}>详情</Text>
                    </View>
                </View>
                <View style={{justifyContent: 'center', padding: 10}}>
                    {/*<SharedElement sourceId="source">*/}
                        <View style={{width: width}}>
                            <Image
                                style={{
                                    width: width - 40, height: 150, borderColor: MainColor,
                                    borderRadius: 10, borderWidth: 1
                                }}
                                source={{uri: item.images[0]}}/>
                            <Text style={[styles.title_view,]}>
                                {item.title}
                            </Text>
                        </View>
                    {/*</SharedElement>*/}
                </View>
            </View>
        );
    }
}


const styles = {
    title_view: {
        color: ColorTextGrey,
        fontSize: 16,
        padding: 10,
    }
};