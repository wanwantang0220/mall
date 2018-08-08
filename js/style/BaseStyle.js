const App_Name = "Mung";
import {StyleSheet} from 'react-native';

const Init_HotMovies = {
    count: 5,
    start: 0,
    total: 1,
    "subjects": {
        count: 20,
        start: -1,
        total: 0,
        subjects: [{
            rating: {
                average: 8,
            },
            genres: [
                "动作", "科幻", "爱情"
            ],
            title: "蓝豆",
            casts: [{name: "mung"}, {name: "mung"}, {name: "mung"}],
            directors: [{name: "mochixuan", avatars: {large: require("../images/icon_default_icon.png")}}],
            images: {large: require("../images/icon_default_cover.png")}
        }]
    }
}
const Base = {
    name: 'apikey',
    value: '0df993c66c0c636e29ecbb5344252a4a'
}
const Cate_Data = [
    {
        title: 'Top250',
        url: '',
        colors: ['#fe4080', "#ff77a5"],
        icon: require('../images/icon_top250.png'),
        index: 0,
    }, {
        title: '口碑榜',
        url: '',
        colors: ['#feaa1a', "#ffd31a"],
        icon: require('../images/icon_praise.png'),
        index: 1,
    }, {
        title: '北美票房榜',
        url: '',
        colors: ['#b983ff', "#a35cff"],
        icon: require('../images/icon_north.png'),
        index: 2,
    }, {
        title: '新片榜',
        url: '',
        colors: ['#00ceff', "#0196fe"],
        icon: require('../images/icon_newlast.png'),
        index: 3,
    }
]

const Default_Photos = {
    w_badge: -1,
    photos: [{
        photos_count: -1,
    }]
}

const Movie_Types = [
    {
        type: '搞笑',
        icon: require('../images/icon_tag_1.png'),
        color: '#e3812b',
    },
    {
        type: '爱情',
        icon: require('../images/icon_tag_2.png'),
        color: '#ff329b',
    },
    {
        type: '动作',
        icon: require('../images/icon_tag_3.png'),
        color: '#1415ff',
    },
    {
        type: '科技',
        icon: require('../images/icon_tag_4.png'),
        color: '#81c6ff',
    },
    {
        type: '记录',
        icon: require('../images/icon_tag_5.png'),
        color: '#5fc0a5',
    },
    {
        type: '动漫',
        icon: require('../images/icon_tag_6.png'),
        color: '#44ff19',
    },
    {
        type: '犯罪',
        icon: require('../images/icon_tag_7.png'),
        color: '#0c040d',
    },
    {
        type: '战争',
        icon: require('../images/icon_tag_8.png'),
        color: '#b10723',
    }
]

const Theme_Datas = [
    {
        color: '#937eff',
        name: 'BlueViolet',
    },
    {
        color: '#87CEFA',
        name: 'LightSkyBlue',
    },
    {
        color: '#48D1CC',
        name: 'Teal',
    },
    {
        color: '#00FF00',
        name: 'Lime',
    },
    {
        color: '#FF4500',
        name: 'OrangeRed',
    },
    {
        color: '#FF1493',
        name: 'DeepPink',
    },
    {
        color: '#40E0D0',
        name: 'Turquoise',
    },
    {
        color: '#008B8B',
        name: 'DarkCyan',
    },
    {
        color: '#1E90FF',
        name: 'DoderBlue',
    },
    {
        color: '#FF00FF',
        name: 'Fuchsia',
    },
    {
        color: '#FF1493',
        name: 'DeepPink',
    },
    {
        color: '#483D8B',
        name: 'DarkSlateBlue',
    },
];

const GrayColor = '#9D9D9D';
const GrayBlackColor = '#666666';
const White = '#ffffff';
const Translucent = 'rgba(125,125,125,0.6)';
const MainBg = '#f5f5f5';
const GrayWhiteColor = '#f5f5f5';
const MikeWhiteColor = '#f0ffff';
const BlackTextColor = '#444444';
const BlackColor = '#000000';
const WhiteTextColor = '#ffffff';


const ThemeColor = '#268dcd';
const SeparatorColor = '#e0e0e0';
const BackgroundColor = '#F7F7F7';
const BackgroundColorLight = '#dddfe0';
const ColorTextGrey = '#989898';
const ColorTextGrey2 = '#b5b5b5';
const ColorRed = '#FF0000';
const ColorStart = '#F24A16';
const ColorEnd = '#BE0154';
const ColorLine = '#E5E5E5';
const ColorLineRed = '#E83F57';
const themeColor = '#268dcd';
const separatorColor = '#e0e0e0';
const backgroundColor = '#f3f3f3';
//通用颜色
const white_fff = '#fff';
const black_000 = '#000';
const gray_e9e9e9 = '#e9e9e9';

//App 主色调
const green_00C853 = '#67D5B5';
const red_E53935 = '#EE7785';
const blue_009688 = '#C89EC4';
const yellow_ffc962 = '#ffc962';
const blue_00B0FF = '#84B1ED';

//OFO
const yellow_FFD900 = '#FFD900';
const black_0000004D = '#0000004D';

//Twitter
const blue_1DA1F2 = '#1DA1F2';
const blue_1DA1F266 = '#1DA1F266';

//QQBrowser
const blue_4187E8 = '#4187E8';
const black_00000080 = '#00000088';

//WeChat
const black_393A3F = '#393A3F';
const green_65E102 = '#65E102';

const BaseStyles = StyleSheet.create({
    baseWhiteText: {
        fontSize: 16,
        color: WhiteTextColor,
    },
    baseBlackText: {
        fontSize: 16,
        color: BlackTextColor,
    },
    baseIcon: {
        width: 26,
        height: 26,
    }
});

const MainColor = '#ff6a3c';
const ToolColor = '#000000';

export {
    Base, App_Name, Cate_Data, Default_Photos, Movie_Types, Theme_Datas, MainColor,
    MainBg,
    GrayColor,
    GrayBlackColor,
    Translucent,
    White,
    BlackColor,
    GrayWhiteColor,
    MikeWhiteColor,
    BlackTextColor,
    WhiteTextColor,
    BaseStyles,
    ToolColor,

    BackgroundColorLight,
    ColorTextGrey,

    white_fff,
    black_000,
    gray_e9e9e9,
    green_00C853,
    red_E53935,
    blue_009688,
    yellow_ffc962,
    blue_00B0FF,
    yellow_FFD900,
    black_0000004D,
    blue_1DA1F2,
    blue_1DA1F266,
    blue_4187E8,
    black_00000080,
    black_393A3F,
    green_65E102,
}