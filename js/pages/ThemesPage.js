import React, {PureComponent} from 'react';
import {
    ActivityIndicator, Dimensions, FlatList, Image, ScrollView, StatusBar, Text, TouchableOpacity,
    View
} from "react-native";
import {Default_Photos} from "../style/BaseContant";
import {
    BackgroundColorLight, BaseStyles, BlackTextColor, MainBg, MainColor, ToolColor, White,
    WhiteTextColor
} from "../style/BaseStyle";
import LinearGradient from "react-native-linear-gradient";
import NaviBarView from "../component/NaviBarView";
import httpUrl from "../http/HttpUrl";
import {width} from '../util/ScreenUtil';
import mainStyles from "../style/Css";


export default class ThemesPage extends PureComponent {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            mHotList: [],
            mThemeList: [],
            MainColor: MainColor,
            ToolColor: ToolColor,
        };
    }


    async componentDidMount() {
        this.index = this.props.navigation.state.params.data.index;
        this.title = this.props.navigation.state.params.data.title;
        this.getList();


    }

    render() {
        this.index = this.props.navigation.state.params.data.index;
        this.title = this.props.navigation.state.params.data.title;

        const flag = (this.index === 0 || this.index === 1) ? true : false;

        const show_result = flag ? this.getHotView() : this.getThemeView();

        if (this.state.mHotList == null && this.state.mThemeList == null) {
            return (
                this.state.isInitSuccess ? (
                    <LinearGradient style={styles.loading_view} colors={[this.state.MainColor, WhiteTextColor]}>
                        <ActivityIndicator
                            animating={true}
                            color={this.state.MainColor}
                            size='large'/>
                        <Text style={[styles.loading_text, {color: this.state.MainColor}]}>loading</Text>
                    </LinearGradient>
                ) : (
                    <LinearGradient style={styles.loading_view} colors={[this.state.MainColor, WhiteTextColor]}>
                        <TouchableOpacity onPress={() => {
                            this.setState({isInitSuccess: true});
                        }}>
                            <Text style={[styles.reload_view, {
                                color: this.state.MainColor,
                                borderColor: this.state.MainColor,
                            }]}>reloading</Text>
                        </TouchableOpacity>
                    </LinearGradient>)
            )
        } else {
            return (
                <View style={[styles.container]}>
                    {/*状态栏*/}
                    <StatusBar
                        animated={true}
                        backgroundColor={this.state.ToolColor}
                        barStyle='light-content'/>
                    <NaviBarView backgroundColor={this.state.ToolColor}/>
                    <View style={[styles.toolbar, {backgroundColor: this.state.MainColor}]}>
                        <TouchableOpacity
                            style={{paddingStart: 15}}
                            onPress={() => {
                                this.props.navigation.goBack()
                            }}>
                            <Image
                                style={BaseStyles.baseIcon}
                                source={require('../images/icon_back.png')}/>
                        </TouchableOpacity>
                        <View style={styles.toolbar_middle}>
                            <Text style={styles.toolbar_middle_text}>{this.title}</Text>
                        </View>
                    </View>

                    <View>
                        {show_result}
                    </View>

                </View>

            )
        }
    }


    getHotView() {
        return (
            <View>
                <FlatList
                    data={this.state.mHotList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (this.renderHotItemView(item))}
                    showsVerticalScrollIndicator={false}

                />
            </View>
        )
    };


    getThemeView() {
        return (
            <View style={[styles.theme_view]}>
                <FlatList
                    data={this.state.mThemeList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (this.renderThemeItemView(item))}
                    showsVerticalScrollIndicator={false}

                />
            </View>
        )
    }

    renderHotItemView(item) {
        return (
            <View>

            </View>
        )
    }


    renderThemeItemView(item) {
        return (
            <View style={[styles.theme_item_view]}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{
                        flex: 1,
                        padding:10
                    }}>
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 45,
                                borderColor: BlackTextColor,
                            }}
                            source={{uri: item.thumbnail}}
                            mode={Image.resizeMode.contain}
                        />
                    </View>

                    <View style={{flexDirection: 'column', flex: 5,padding:10}}>
                        <Text>{item.name}</Text>
                        <Text>{item.description}</Text>
                    </View>
                </View>

                <View style={[mainStyles.line]}/>
            </View>
        )
    }

    async getList() {
        const index = this.props.navigation.state.params.data.index;

        let mlist;
        if (index === 0) {
            mlist = await  httpUrl.getHot({
                query: {}
            });
            let hotlist = await mlist.json();
            if (hotlist != null) {
                this.setState({
                    mHotList: hotlist.recent
                })
            }
        } else if (index === 1) {
            mlist = await  httpUrl.getLatest({
                query: {}
            });
            let latestlist = await mlist.json();
            if (latestlist != null) {
                this.setState({
                    mHotList: latestlist.stories
                })
            }
        } else if (index === 2) {
            mlist = await  httpUrl.getThemes({
                query: {}
            });
            let themeslist = await mlist.json();
            if (themeslist != null) {
                this.setState({
                    mThemeList: themeslist.others
                })
            }
        } else if (index === 3) {
            mlist = await  httpUrl.getSections({
                query: {}
            });
            let sectionslist = await mlist.json();
            if (mlist != null) {
                this.setState({
                    mThemeList: sectionslist.data
                })
            }
        }
        console.log('mHotList:', this.state.mHotList);
        console.log('mThemeList:', this.state.mThemeList);
    }
}


const styles = {
    container: {
        // backgroundColor: 'transparent',
        position: 'relative',
        flex: 1,
        backgroundColor: White
    },
    toolbar: {
        height: 56,
        width: width,
        alignItems: 'center',
        flexDirection: 'row',
    },
    toolbar_left_img: {
        width: 26,
        height: 26,
        alignSelf: 'center',
        marginLeft: 20,
    },
    toolbar_middle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingEnd: 20
    },
    toolbar_middle_text: {
        fontSize: 18,
        fontWeight: '600',
        color: White
    },
    toolbar_right_img: {
        width: 26,
        height: 26,
        alignSelf: 'center',
        marginRight: 20,
    },
    scrollview_container: {
        flex: 1,
    },
    loading_view: {
        flex: 1,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: MainBg,
    },
    loading_text: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 6,
        backgroundColor: 'transparent',
    },
    reload_view: {
        padding: 8,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
        borderWidth: 3,
        borderRadius: 6,
    },
    theme_view: {
        width: width - 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    theme_item_view: {
        width: width - 20,
        justifyContent: 'center'
    }
};
