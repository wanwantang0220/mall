import React, {PureComponent} from 'react';
import {ActivityIndicator, ScrollView, Text, TouchableOpacity, View, StyleSheet, StatusBar, Image} from "react-native";
import httpUrl from "../http/HttpUrl";
import {
    BaseStyles, BlackTextColor, ColorEnd, ColorRed, ColorStart, ColorTextGrey, ColorTextGrey2, GrayWhiteColor,
    MainColor,
    SeparatorColor, ThemeColor,
    ToolColor,
    WhiteTextColor
} from "../style/BaseStyle";
import LinearGradient from "react-native-linear-gradient";
import NaviBarView from "../component/NaviBarView";
import mainStyles from "../style/Css";
import {width} from "../util/ScreenUtil";


export default class TimeAxisPage extends PureComponent {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            mList: [],
            name: '',
            MainColor: MainColor,
            ToolColor: ToolColor,
            isInitSuccess: true
        };
    }

    async componentDidMount() {
        this.getList();
    }


    render() {
        if (this.state.mList == null) {
            return (
                this.state.isInitSuccess ? (
                    <LinearGradient style={mainStyles.loading_view} colors={[this.state.MainColor, WhiteTextColor]}>
                        <ActivityIndicator
                            animating={true}
                            color={this.state.MainColor}
                            size='large'/>
                        <Text style={[mainStyles.loading_text, {color: this.state.MainColor}]}>loading</Text>
                    </LinearGradient>
                ) : (
                    <LinearGradient style={mainStyles.loading_view} colors={[this.state.MainColor, WhiteTextColor]}>
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
                        backgroundColor={this.state.ToolColor}
                        barStyle='light-content'/>
                    <NaviBarView backgroundColor={this.state.ToolColor}/>
                    <View style={[mainStyles.toolbar, {backgroundColor: this.state.MainColor}]}>
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
                            <Text style={mainStyles.toolbar_middle_text}>{this.state.name}</Text>
                        </View>
                    </View>

                    <ScrollView style={{marginBottom: 5}}>
                        {this.renderItemView()}
                    </ScrollView>
                </View>

            )
        }
    }

    renderItemView() {
        const data = this.state.mList;
        return data.map((item, index) => {
            let backgroundColor = index === 0 ? MainColor : GrayWhiteColor;

            return (
                <View style={styles.express_item} key={index}>
                    <View style={styles.express_right_first}>
                        <View style={[styles.process, {width: width - 40}]}>
                            <Text style={{color: ColorStart, fontSize: 14, paddingLeft: 5}}>{item.title}</Text>

                            <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'space-between'}}>
                                <Image
                                    style={[styles.process_image_view]}
                                    source={{uri: item.images[0]}}/>
                                <Text style={[styles.process_text_view2, {}]}>
                                    {item.display_date}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.express_left, {backgroundColor: backgroundColor}]}/>
                </View>
            )

        })

    }


    async getList() {
        const id = this.props.navigation.state.params.data;
        console.log('id : ', id);

        const mlist = await httpUrl.getSectionsAbout({
            id: id
        });

        let clist = await  mlist.json();
        if (clist != null) {
            this.setState({
                mList: clist.stories,
                name: clist.name,
                isInitSuccess: true,
            })
        } else {
            this.setState({
                isInitSuccess: false,
            })
        }

        console.log('mList : ', this.state.mList);


    }

}

const styles = StyleSheet.create({
    express_item: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 10,
        width: width
    },
    express_right_first: {
        width: width,
        paddingLeft: 30,
        borderLeftWidth: 1,
        borderLeftColor: '#e0e0e0',
        flexDirection: 'column'
    },
    express_left: {
        width: 20,
        height: 20,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: SeparatorColor,
        backgroundColor: '#e0e0e0',
        position: 'relative',
        right: width + 10,
        top: 10,
        marginStart: 5,
    },
    process: {
        paddingVertical: 20,
        flexDirection: 'column',
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        paddingRight: 15
    },
    process_text_view1: {},
    process_text_view2: {
        color: ColorTextGrey2,
        fontSize: 12,
        paddingLeft: 10,
        marginTop: 10,
        marginRight:10
    },
    process_image_view: {
        width: 80,
        height: 40,
        borderRadius: 5,
        borderColor: MainColor,
        borderBottomWidth: 1,
        padding: 5,
    }

});