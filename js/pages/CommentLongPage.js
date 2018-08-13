import React, {PureComponent} from 'react';
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {
    BackgroundColorLight,
    BaseStyles,
    GrayBlackColor,
    GrayColor,
    MainBg,
    MainColor,
    ToolColor,
    White,
    WhiteTextColor
} from "../style/BaseStyle";
import LinearGradient from "react-native-linear-gradient";
import NaviBarView from "../component/NaviBarView";
import httpUrl from "../http/HttpUrl";
import {getTime} from "../util/TimeUtil";
import {checkNullObj} from "../util/Tool";
import {show} from "../util/ToastUtils";

const {width, height} = Dimensions.get('window');


export default class CommentLongPage extends PureComponent {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            commentList: [],
            extraInfo: {},
            MainColor: MainColor,
            ToolColor: ToolColor,
            IsLoadingComment: false,
        };
    }

    async componentDidMount() {
        const id = this.props.navigation.state.params.data;
        const comments = await  httpUrl.getLongComments({
            id: id
        });

        const extras = await  httpUrl.getExtra({
            id: id
        });
        let commentlist = await comments.json();
        let extrainfo = await  extras.json();
        if (commentlist != null) {
            this.setState({
                commentList: commentlist.comments,
                isInitSuccess: true,
            })
        } else {
            this.setState({
                isInitSuccess: false,
            })
        }

        if (extrainfo != null) {
            this.setState({
                extraInfo: extrainfo
            })
        } else {
            this.setState({
                isInitSuccess: false,
            })
        }


    }

    render() {

        const extraInfo = this.state.extraInfo;
        console.log('checkNullObj(extraInfo) : ', checkNullObj(extraInfo));
        const popularity = 'popularity ：' + (checkNullObj(extraInfo) !== true ? extraInfo.popularity : '');
        const long_comments = '评论数 ：' + (checkNullObj(extraInfo) !== true ? extraInfo.long_comments : '');

        if (this.state.commentList == null) {
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
                            <Text style={styles.toolbar_middle_text}>长评论</Text>
                        </View>

                    </View>
                    <ScrollView style={[styles.scrollview_container]}
                                showsVerticalScrollIndicator={false}>
                        <View style={styles.commentary_descr_view}>
                            <Text style={styles.commentary_descr_text}>信息区</Text>
                        </View>
                        <View style={[styles.extra_view]}>
                            <Text style={{fontSize: 14, color: GrayBlackColor, flex: 1}}>
                                {popularity}
                            </Text>
                            <Text style={{fontSize: 14, color: GrayBlackColor, flex: 1}}>
                                {long_comments}
                            </Text>
                        </View>
                        {/*评论*/}
                        <View style={[styles.commentary]}>
                            <View style={styles.commentary_descr_view}>
                                <Text style={styles.commentary_descr_text}>评论区</Text>
                            </View>
                            <FlatList
                                data={this.state.commentList}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({item}) => (this.renderItemView(item))}
                                showsVerticalScrollIndicator={false}/>
                        </View>
                        {/*加载更多*/}
                        <View style={styles.commentary_item_loadmore_view}>{this.getCommentaryItemLoadView()}</View>
                    </ScrollView>
                </View>
            )
        }

    }


    renderItemView(item) {

        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.commentary_item_view}>
                <View style={{flexDirection: 'row', width: width - 20, flex: 1}}>
                    <Image
                        source={{uri: item.avatar}}
                        style={[styles.commentary_item_auther_img, {borderColor: this.state.MainColor}]}/>
                    <View style={styles.commentary_item_view_top_left}>
                        <Text style={styles.commentary_item_view_top_name} numberOfLines={1}>
                            {item.author}
                        </Text>

                    </View>

                    <View style={styles.commentary_item_view_top_right}>
                        <Image
                            source={require('../images/icon_zan.png')}
                            style={styles.commentary_item_view_top_right_img}
                            tintColor={this.state.MainColor}
                        />
                        <Text style={styles.commentary_item_view_top_right_num}>{item.likes}</Text>
                    </View>

                </View>

                <View>
                    <View style={styles.commentary_item_view_mid}>
                        <Text numberOfLines={10}
                              style={styles.commentary_item_view_comment}>
                            {item.content}
                        </Text>
                        <Text style={styles.commentary_item_view_time} numberOfLines={1}>
                            {getTime(item.time)}
                        </Text>
                    </View>
                </View>

                <View style={{
                    height: 0.5,
                    width: width - 20,
                    backgroundColor: BackgroundColorLight,
                    marginTop: 5,
                    marginEnd: 10
                }}/>

            </TouchableOpacity>
        )
    }


    /***
     * 加载更多
     * @returns {*}
     */
    getCommentaryItemLoadView() {
        if (this.state.IsLoadingComment) {
            return (
                <TouchableOpacity onPress={() => {
                    show("加载中,请稍等")
                }}>
                    <View style={{flexDirection: 'row'}}>
                        <ActivityIndicator
                            style={{marginRight: 6}}
                            animating={true}
                            color={this.state.MainColor}/>
                        <Text style={[styles.commentary_item_loadmore_text, {color: this.state.MainColor}]}>
                            加载中...
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity onPress={() => {
                    if (this.state.IsLoadingComment) {
                        show('已加载中,请稍等')
                    } else {
                        this.setState({
                            IsLoadingComment: true,
                        });
                        this.requestCommonary()
                    }
                }}>
                    <Text style={[styles.commentary_item_loadmore_text, {color: this.state.MainColor}]}>
                        加载更多评论
                    </Text>
                </TouchableOpacity>
            )
        }


    }


     requestCommonary() {
        var sleep = function (time) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve();
                }, time);
            })
        };
        sleep(3000);
        this.setState({
            IsLoadingComment: false,
        })
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
    commentary: {
        width: width,
        marginTop: 20
    },
    commentary_descr_view: {
        width: width,
        height: 48,
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
        borderColor: White,
        borderBottomWidth: 2,
    },
    commentary_descr_text: {
        color: GrayColor,
        fontSize: 16,
        marginLeft: 10,
        fontWeight: '500',
    },
    commentary_flatlist_view: {
        width: width,
        paddingLeft: 10,
        paddingRight: 10,
    },
    commentary_item_loadmore_view: {
        width: width,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    commentary_item_loadmore_text: {
        fontSize: 12,
    },
    commentary_item_view: {
        flexDirection: 'column',
        paddingTop: 6,
        paddingBottom: 6,
        paddingStart: 6,
        paddingEnd: 6,
        backgroundColor: White

    },
    commentary_item_auther_img: {
        width: 36,
        height: 36,
        marginRight: 6,
        borderRadius: 48,
        borderWidth: 1,
    },

    commentary_item_view_top_left: {
        alignItems: 'flex-start',
        flex: 3,
    },
    commentary_item_view_top_name: {
        color: GrayBlackColor,
        marginRight: 8,
        fontSize: 16,
        fontWeight: '500',
        maxWidth: width / 3,
    },
    commentary_item_view_top_right: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingRight: 6,
        flex: 1
    },
    commentary_item_view_top_right_img: {
        width: 16,
        height: 16,
        marginRight: 6,
        alignItems: 'center',
    },
    commentary_item_view_top_right_num: {
        color: GrayColor,
        fontSize: 12,
        alignItems: 'center',
    },
    commentary_item_view_mid: {
        width: width - 20
    },
    commentary_item_view_comment: {
        color: GrayBlackColor,
        fontSize: 14,
        lineHeight: 22,
        marginTop: 4,
        marginBottom: 4,
    },
    commentary_item_view_time: {
        color: GrayColor,
        fontSize: 12,
        paddingRight: 6,
        alignSelf: 'flex-end',
    },
    extra_view: {
        flexDirection: 'row',
        marginStart: 16,
        marginEnd: 16,
        marginTop: 5,
        marginBottom: 5
    }
};