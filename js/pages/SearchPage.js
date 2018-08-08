import React, {PureComponent} from 'react';
import {
    ActivityIndicator, Dimensions, FlatList, Image, Modal, ScrollView, StatusBar, Text, TextInput, TouchableOpacity,
    View
} from "react-native";
import {Default_Photos} from "../style/BaseContant";
import {GrayBlackColor, GrayColor, MainBg, MainColor, ToolColor, White, WhiteTextColor} from "../style/BaseStyle";
import NaviBarView from "../component/NaviBarView";
import {show} from "../util/ToastUtils";
import LinearGradient from "react-native-linear-gradient";
import {Movie_Types} from '../style/BaseContant';

const itemHight = 200;
const moviesCount = 20;
const {width, height} = Dimensions.get('window');

export default class SearchPage extends PureComponent {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            editValue: '',
            isShowModal: false,
            searchDatas: {},
            refreshing: false,
            isCannelRequest: false,
            MainColor: MainColor,
            ToolColor: ToolColor,
        };
    }


    render() {
        return (
            <View style={styles.container}>
                {/*状态栏*/}
                <StatusBar
                    animated={true}
                    backgroundColor={this.state.MainColor}
                    barStyle='light-content'
                />
                <NaviBarView backgroundColor={this.state.MainColor}/>
                {this.renderContentView()}
            </View>
        )
    }

    renderContentView() {
        return (
            <View style={styles.content}>
                {/*加载中*/}
                <Modal
                    animationType={"fade"}
                    transparent={true}
                    visible={this.state.isShowModal}
                    onRequestClose={() => {
                        this.setState({
                            isCannelRequest: true,
                            isShowModal: false,
                        });
                        show("取消搜索")
                    }}>
                    <View style={styles.modal}>
                        <LinearGradient style={styles.modal_view} colors={[this.state.MainColor, WhiteTextColor]}>
                            <ActivityIndicator
                                style={{marginRight: 6}}
                                animating={true}
                                color={this.state.MainColor}
                                size='large'/>
                            <Text style={[styles.modal_text, {color: this.state.MainColor}]}>加载中</Text>
                        </LinearGradient>
                    </View>
                </Modal>
                {/*搜索栏*/}
                <View style={[styles.search_view, {backgroundColor: this.state.MainColor}]}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.goBack()
                    }}>
                        <Image
                            style={styles.search_view_back}
                            source={require('../images/icon_back.png')}/>
                    </TouchableOpacity>
                    <TextInput
                        placeholder="search"
                        placeholderTextColor={GrayColor}
                        onChangeText={(text) => this.setState({editValue: text})}
                        value={this.state.editValue}
                        ref='textinput'
                        underlineColorAndroid='transparent'
                        style={styles.search_view_edit}
                    />
                    <TouchableOpacity onPress={() => {
                        if (this.state.editValue == null || this.state.editValue.length == 0) {
                            show("请输入想搜索内容")
                        }
                    }}>
                        <Image
                            style={styles.search_view_icon}
                            source={require('../images/icon_search.png')}/>
                    </TouchableOpacity>
                </View>
                {/*推荐栏*/}
                <View style={styles.recommend_view}>
                    {this.renderRecommendView()}
                </View>
            </View>
        )
    }

    renderRecommendView() {
        return Movie_Types.map((item, i) => {
            return (
                <TouchableOpacity
                    activeOpacity={0.8}
                    key={i}
                    onPress={() => {
                        this.setState({editValue: item.type})
                    }}>
                    <View
                        style={styles.recommend_view_item}>
                        <View style={[styles.recommend_view_item_icon_view, {borderColor: item.color}]}>
                            <Image source={item.icon}
                                   style={[styles.recommend_view_item_icon, {tintColor: item.color}]}/>
                        </View>
                        <Text style={[styles.recommend_view_item_text, {color: item.color}]}>{item.type}</Text>
                    </View>
                </TouchableOpacity>

            )
        })
    }


}

const styles = {
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        width: width,
        backgroundColor: MainBg,
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_view: {
        backgroundColor: White,
        width: 80,
        height: 80,
        borderRadius: 10,
        elevation: 8,
        shadowRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    modal_text: {
        fontSize: 14,
        fontWeight: '500',
        marginTop: 10,
        backgroundColor: 'transparent',
    },
    search_view: {
        height: 56,
        width: width,
        alignItems: 'center',
        flexDirection: 'row',
    },
    search_view_back: {
        width: 26,
        height: 26,
        marginLeft: 20,
    },
    search_view_edit: {
        flex: 1,
        margin: 8,
        marginLeft: 20,
        marginRight: 20,
        padding: 4,
        paddingLeft: 15,
        backgroundColor: White,
        borderRadius: 30,
    },
    search_view_icon: {
        width: 26,
        height: 26,
        marginRight: 20,
    },
    recommend_view: {
        marginTop: 40,
        padding: 16,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    recommend_view_item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        paddingTop: 16,
    },
    recommend_view_item_icon_view: {
        padding: 4,
        borderWidth: 2,
        borderRadius: 30,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    recommend_view_item_icon: {
        width: 26,
        height: 26,
    },
    recommend_view_item_text: {
        fontSize: 16,
    },
    result_view: {
        height: 56,
        flex: 1,
        marginRight: 46,
        alignItems: 'center',
        justifyContent: 'center',
    },
    result_title: {
        fontSize: 16,
        fontWeight: '500',
        color: WhiteTextColor,
    },
    item: {
        height: itemHight,
        width: width,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderColor: White,
        borderBottomWidth: 1,
    },
    item_img: {
        width: 96,
        height: 155,
        borderRadius: 4,
        marginRight: 10,
    },
    item_right: {
        height: itemHight - 20,
        flex: 1,
        justifyContent: 'center',
    },
    item_right_title: {
        color: GrayBlackColor,
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
    },
    item_right_text: {
        fontSize: 14,
        color: GrayColor,
        marginBottom: 4,
    },
    item_right_rating: {
        flexDirection: 'row',
        marginTop: 6,
        alignItems: 'center',
    },
    item_right_rating_text: {
        fontSize: 14,
        color: '#ffcc33',
        fontWeight: '500',
        marginLeft: 8,
    },
    loading_more_view: {
        width: width,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading_more_view_text: {
        fontSize: 16,
        backgroundColor: 'transparent',
    },
};