import React, {Component} from 'react';
import {
    Dimensions, Image, StyleSheet, View, Text, StatusBar, TouchableOpacity, ScrollView,
    FlatList
} from "react-native";
import color from "../style/ColorStyle";
import {jumpPager} from "../util/Utils";
import {GrayWhiteColor, MainColor, ToolColor, White, WhiteTextColor} from "../style/BaseStyle";
import NaviBarView from "../component/NaviBarView";
import Swiper from 'react-native-swiper';

import httpUrl from "../http/HttpUrl";
import TouchableView from "../component/TouchableView";
import LinearGradient from "react-native-linear-gradient";
import {Cate_Data} from "../style/BaseContant";

const {width, height} = Dimensions.get('window');
const itemHight = 150;
const moviesCount = 20;


export default class HomePage extends Component {


    static navigationOptions = (navigation) => ({
        tabBarIcon: ({focused}) => {
            // 根据是否选中，显示不同图片
            const icon = focused
                ? require('../images/icon_home_active.png')
                : require('../images/icon_home.png');
            return <Image source={icon} style={{height: 22, width: 22}}/>;
        },
        //标题
        title: '首页',
        drawerLabel: '首页',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
            alignSelf: 'center',
            fontWeight: 'bold',
            color: 'red',
            backgroundColor: color.activeBarText,
            width: Dimensions.get('window').width,
        },

        headerRight: (<View/>),
        headerLeft: (<View/>),
        cardStack: {
            gesturesEnabled: false  // 是否可以右滑返回
        }
    });

    constructor(props) {
        super(props);
        this.state = {
            hotMovies: [],
            totalMovies: [],
            refreshing: true,
            isInit: false,
            MainColor: MainColor,
            ToolColor: ToolColor,
        }
    }

    componentWillUpdate() {
    };

    async componentDidMount() {

        const res = await httpUrl.getLatest({
            query: {}
        });
        let info = await res.json();
        console.log('info : ', info);

        if (info != null && info.top_stories != null && info.stories != null) {
            this.setState({
                hotMovies: info.top_stories,
                totalMovies: info.stories,
                refreshing: false,
                isInit: true,
            });
        }

    }

    render() {
        return (
            <View style={styles.container}>
                {/*状态栏*/}
                <StatusBar
                    animated={true}
                    backgroundColor={this.state.ToolColor}
                    barStyle='light-content'/>
                <NaviBarView backgroundColor={this.state.ToolColor}/>
                <View style={[styles.toolbar, {backgroundColor: this.state.MainColor}]}>
                    <TouchableOpacity
                        onPress={() => {
                            jumpPager(this.props.navigation.navigate, "Theme", this.onChangeTheme.bind(this))
                        }}>
                        <Image
                            source={require('../images/icon_theme.png')}
                            style={styles.toolbar_left_img}
                            tintColor={White}/>
                    </TouchableOpacity>
                    <View style={styles.toolbar_middle}>
                        <Text style={styles.toolbar_middle_text}>Mung</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            jumpPager(this.props.navigation.navigate, "Search", null)
                        }}>
                        <Image
                            source={require('../images/icon_search.png')}
                            style={styles.toolbar_right_img}
                            tintColor={White}/>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollview_container}
                            showsVerticalScrollIndicator={false}>
                    {this.getContentView()}
                </ScrollView>
            </View>
        )
    }

    onChangeTheme() {
        this.setState({
            MainColor: '#FF5151', //技巧
        })
    }


    getContentView() {
        if (this.state.isInit) {
            return (
                <View style={styles.content_view}>
                    <View style={styles.middle_view}>
                        <View style={styles.swiper}>
                            <Swiper
                                showsButtons={false}
                                height={220}
                                autoplay={true}
                                autoplayTimeout={1000}
                                dot={<View style={styles.swiper_dot}/>}
                                activeDot={<View style={styles.swiper_activeDot}/>}
                                paginationStyle={styles.swiper_pagination}>
                                {this.swiperChildrenView()}
                            </Swiper>
                        </View>
                        {/*分类栏*/}
                        <View style={[styles.cate_view, {backgroundColor: this.state.MainColor,}]}>
                            {this.cateChildrenView()}
                        </View>
                    </View>
                    {/*列表*/}
                    <View style={styles.flat_view}>
                        <FlatList
                            data={this.getHotMovies()}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={
                                ({item}) => this.renderItemView(item)
                            }
                            getItemLayout={(data, index) => this.getItemLayout(data, index)}
                            showsVerticalScrollIndicator={false}
                            numColumns={3}
                        />
                    </View>

                </View>
            )
        } else {
            return (<View style={styles.content_view}/>)
        }
    }


    /***
     * banner
     */
    swiperChildrenView() {
        let items = this.getHotMovieDatas(true);
        console.log('items :', items);
        if (items != null && items.length > 0) {
            return items.map((item, i) => {
                return (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        key={i}
                        onPress={() => {
                            jumpPager(this.props.navigation.navigate, 'NewDetail', item.id)
                        }}>
                        <View
                            style={[styles.swiper_children_view, {backgroundColor: this.state.MainColor}]}>
                            <Image
                                style={styles.swiper_children_cover}
                                mode={Image.resizeMode.contain}
                                source={{uri: item.image}}/>
                            <View style={styles.swiper_children_right}>
                                <Text style={styles.swiper_children_title}
                                      numberOfLines={1}>
                                    {item.title}
                                </Text>
                                <View style={styles.swiper_children_casts_view}>
                                    <Text
                                        style={styles.swiper_children_casts_text}
                                        numberOfLines={2}>
                                        {item.id}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            });
        }
    }

    /***
     * 分类
     */
    cateChildrenView() {
        return Cate_Data.map((item, i) => {
            return (
                <TouchableView
                    key={i}
                    style={styles.cate_children_touchview}
                    onPress={() => {
                        jumpPager(this.props.navigation.navigate, 'MovieList', {
                            index: item.index,
                            title: item.title
                        })
                    }}>
                    <View style={styles.cate_children_view}>
                        <LinearGradient
                            colors={item.colors}
                            style={styles.cate_children_linear}>
                            <Image
                                source={item.icon}
                                style={styles.cate_children_image}/>
                        </LinearGradient>
                        <Text
                            style={styles.cate_children_text}>
                            {item.title}
                        </Text>
                    </View>
                </TouchableView>
            )
        });
    }


    /***
     * 列表item
     */
    renderItemView(item) {
        return (
            <View style={styles.flat_item}>
                <TouchableView
                    style={styles.flat_item_touchableview}
                    onPress={() => {
                        jumpPager(this.props.navigation.navigate, 'MovieDetail', item.id)
                    }}>
                    <View style={[styles.flat_item_view, {backgroundColor: this.state.MainColor}]}>
                        <Image
                            source={{uri: item.images[0]}}
                            style={styles.flat_item_image}
                            mode={Image.resizeMode.contain}/>
                        <View style={[styles.flat_item_detail, {backgroundColor: this.state.MainColor}]}>
                            <Text style={styles.flat_item_title}
                                  numberOfLines={1}>
                                {item.title}
                            </Text>
                        </View>
                    </View>
                </TouchableView>
            </View>
        )
    }

    getItemLayout(data, index) {
        return {length: itemHight, offset: itemHight * index, index}
    }


    getHotMovieDatas(isBanner) {
        let items = [];
        let movieDatas = this.state.hotMovies;
        if (movieDatas != null && movieDatas.length > 4) {
            if (isBanner) {
                for (let i = 0; i < 4; i++) {
                    items.push(movieDatas[i]);
                }
            } else {
                for (let i = 4; i < movieDatas.length; i++) {
                    items.push(movieDatas[i]);
                }
            }
        }
        return items;
    }

    /**
     * 列表
     * @returns {Array}
     */
    getHotMovies() {
        let items = [];
        let movieDatas = this.state.totalMovies;
        if (movieDatas != null && movieDatas.length > 4) {
            for (let i = 0; i < movieDatas.length; i++) {
                items.push(movieDatas[i]);
            }
        }
        return items;
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
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
    content_view: {
        flex: 1,
    },
    middle_view: {
        backgroundColor: WhiteTextColor,
        paddingBottom: 10,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    swiper: {
        height: 220,
    },
    swiper_dot: {
        backgroundColor: 'rgba(0,0,0,.5)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    swiper_activeDot: {
        backgroundColor: WhiteTextColor,
        width: 16,
        height: 2,
        borderRadius: 1,
        marginLeft: 2,
        marginRight: 2,

    },
    swiper_pagination: {
        justifyContent: 'flex-end',
        marginRight: 20,
    },
    swiper_children_view: {
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 6,
    },
    swiper_children_cover: {
        width: width - 40,
        height: 180,
        borderRadius: 4,
    },
    swiper_children_right: {
        marginTop: 20,
        height: 180,
        marginLeft: 20,
    },
    swiper_children_title: {
        fontSize: 18,
        marginBottom: 10,
        color: WhiteTextColor
    },
    swiper_children_director: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    swiper_children_director_img: {
        width: 26,
        height: 26,
        borderRadius: 13,
        marginRight: 8,
    },
    swiper_children_director_name: {
        fontSize: 14,
        color: GrayWhiteColor
    },
    swiper_children_casts_view: {
        width: width - 190,
        marginBottom: 10,
    },
    swiper_children_casts_text: {
        fontSize: 14,
        flexWrap: 'wrap',
        color: GrayWhiteColor
    },
    swiper_children_rating_view: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    swiper_children_rating_text: {
        fontSize: 14,
        color: '#ffcc33',
        fontWeight: '500',
        marginLeft: 8,
    },
    swiper_children_genres_view: {
        width: width - 190,
        marginBottom: 10,
    },
    swiper_children_genres_text: {
        fontSize: 14,
        flexWrap: 'wrap',
        color: GrayWhiteColor,
    },
    cate_view: {
        height: 72,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 4,
    },
    cate_children_touchview: {
        width: (width - 20) / 4,
        height: 72,
    },
    cate_children_view: {
        width: (width - 20) / 4,
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cate_children_linear: {
        width: 42,
        height: 42,
        borderRadius: 26,
        marginBottom: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cate_children_image: {
        width: 26,
        height: 26,
    },
    cate_children_text: {
        fontSize: 14,
        color: WhiteTextColor,
    },
    flat_view: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: GrayWhiteColor,
    },
    flat_item: {
        height: itemHight,
        width: (width - 10) / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flat_item_touchableview: {
        height: itemHight - 16,
    },
    flat_item_view: {
        height: itemHight - 16,
        alignItems: 'center',
        borderRadius: 4,
    },
    flat_item_image: {
        width: (width - 10) / 3 - 10,
        height: itemHight - 26,
        borderRadius: 4,
    },
    flat_item_detail: {
        width: (width - 10) / 3 - 10,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        padding: 2,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
    },
    flat_item_title: {
        fontSize: 14,
        color: WhiteTextColor,
    },
    flat_item_rating_view: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flat_item_rating_number: {
        fontSize: 12,
        color: '#ffcc33',
        fontWeight: '500',
        marginLeft: 4,
    },
});
