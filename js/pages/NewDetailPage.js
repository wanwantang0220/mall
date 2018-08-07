import React, {PureComponent} from 'react';
import {
    ActivityIndicator, Dimensions, FlatList, Image, ScrollView, StatusBar, Text, TouchableOpacity,
    View, StyleSheet
} from "react-native";
import {Default_Photos} from "../style/BaseContant";
import {GrayBlackColor, GrayColor, GrayWhiteColor, MainBg, MainColor, White, WhiteTextColor} from "../style/BaseStyle";
import LinearGradient from "react-native-linear-gradient";
import {DEFAULT_NAVBAR_HEIGHT} from "../component/ParallaxScrollView";
import httpUrl from "../http/HttpUrl";

const {width, height} = Dimensions.get('window');
const Header_Height = (height - DEFAULT_NAVBAR_HEIGHT) / 2;
const InitPhoto_Count = 6;

export default class NewDetailPage extends PureComponent {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            movieData: null,
            photoDatas: Default_Photos,
            commentaryDatas: {},
            isInitSuccess: true,
            IsLoadingComment: true,
            isShowAll: false,
            MainColor: MainColor,
        };
    }


    componentDidMount() {
        this.requestData();
    }

    render() {
        if (this.state.movieData == null) {
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
                            this.requestData();
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
                <Text>heelo</Text>
            )
        }
    }


    async requestData() {
        const id = this.props.navigation.state.params.data;

        const datas = await httpUrl.getLatest({
            query: {
                id: id
            }
        });
        let info = await datas.json();
        console.log('datas : ', datas.json());
        //TODO 数据处理


    }
}


const styles = StyleSheet.create({
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
    container: {
        flex: 1,
        backgroundColor: MainBg,
        marginTop: 20
    },
    header_view: {
        width: width,
        height: Header_Height,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    header_image_view: {
        width: (Header_Height - DEFAULT_NAVBAR_HEIGHT) * 0.64,
        height: (Header_Height - DEFAULT_NAVBAR_HEIGHT),
        borderRadius: 4,
        marginBottom: DEFAULT_NAVBAR_HEIGHT / 3,
        elevation: 8,
        shadowRadius: 8,
    },
    header_image: {
        width: (Header_Height - DEFAULT_NAVBAR_HEIGHT) * 0.64,
        height: (Header_Height - DEFAULT_NAVBAR_HEIGHT),
        borderRadius: 4,
    },
    intro: {
        padding: 16,
        height: 200,
        width: width,
        borderBottomWidth: 1,
        borderBottomColor: White,
    },
    intro_one: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    intro_one_left: {
        flex: 1,
        paddingRight: 36,
    },
    intro_one_left_top_title: {
        fontSize: 20,
        color: GrayBlackColor,
        fontWeight: '500',
        marginBottom: 14,
    },
    intro_one_left_bottom_text: {
        fontSize: 13,
        color: GrayColor,
    },
    intro_one_right: {
        width: 100,
        height: 100,
        elevation: 6,
        shadowRadius: 6,
        backgroundColor: White,
        justifyContent: 'center',
        alignItems: 'center',
    },
    intro_one_right_title: {
        fontSize: 12,
        color: GrayColor,
    },
    intro_one_right_score: {
        fontSize: 20,
        color: GrayBlackColor,
        fontWeight: '500',
    },
    intro_one_right_number: {
        fontSize: 12,
        color: GrayColor,
    },
    intro_two: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffcc33',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 4,
    },
    intro_two_left: {
        fontSize: 16,
        color: '#ffcc33',
        fontWeight: '500',
        marginRight: 10,
    },
    brief_view: {
        padding: 16,
    },
    brief_view_text: {
        fontSize: 14,
        color: GrayColor,
        marginBottom: 10,
    },
    brief_view_intro: {
        fontSize: 14,
        color: GrayBlackColor,
        lineHeight: 24,
    },
    brief_view_expand: {
        position: 'absolute',
        bottom: 16,
        right: 16,
    },
    brief_view_expand_text: {
        fontSize: 14,
        lineHeight: 24,
        paddingLeft: 10,
        backgroundColor: MainBg
    },
    filemaker: {
        height: 216,
        flex: 1,
        padding: 16,
        paddingTop: 0,
    },
    filemaker_text: {
        fontSize: 14,
        color: GrayColor,
        marginBottom: 6,
    },
    filemiker_View: {
        height: 186,
        width: (width - 32) / 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filemiker_view_image: {
        width: (width - 32) * 0.24,
        height: 140,
        borderRadius: 2,
    },
    filemiker_view_name: {
        fontSize: 14,
        color: GrayBlackColor,
        marginTop: 6,
    },
    photos: {
        height: 200,
        flex: 1,
        padding: 16,
        paddingTop: 0,
        borderColor: White,
        borderBottomWidth: 1,
    },
    photos_text: {
        fontSize: 14,
        color: GrayColor,
        marginBottom: 6,
    },
    photos_item_image: {
        height: 150,
        width: 220,
        marginRight: 4,
        borderRadius: 2,
    },
    photos_loading: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 4,
        backgroundColor: GrayColor,
        borderRadius: 2,
    },
    photos_item_text: {
        fontSize: 12,
        color: GrayWhiteColor,
    },
    photos_item_mask: {
        width: 40,
        height: 1,
        marginTop: 4,
        marginBottom: 4,
        backgroundColor: GrayWhiteColor,
    },
    photos_item_reloadtext: {
        fontSize: 18,
        fontWeight: '500',
    },
    commentary: {
        width: width,
    },
    commentary_descr_view: {
        width: width,
        height: 48,
        paddingLeft: 16,
        paddingRight: 16,
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
        flex: 1,
        width: width,
        paddingLeft: 16,
        paddingRight: 16,
    },
    commentary_item_loadmore_view: {
        width: width,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    commentary_item_loadmore_text: {
        fontSize: 16,
    },
    commentary_item_view: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
    },
    commentary_item_auther_img: {
        width: 36,
        height: 36,
        marginRight: 6,
        borderRadius: 48,
        borderWidth: 1,
    },
    commentary_item_view_top: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    commentary_item_view_top_left: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    commentary_item_view_top_name: {
        color: GrayBlackColor,
        marginRight: 8,
        fontSize: 16,
        fontWeight: '500',
        maxWidth: width / 3,
    },
    commentary_item_view_top_right: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 6,
    },
    commentary_item_view_top_right_img: {
        width: 16,
        height: 16,
        marginRight: 6,
    },
    commentary_item_view_top_right_num: {
        color: GrayColor,
        fontSize: 12,
    },
    commentary_item_view_mid: {
        width: width - 74
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
    }
})
