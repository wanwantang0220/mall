const App_Name = "Mung";
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
        title: '热门',
        url: '',
        colors: ['#fe4080', "#ff77a5"],
        icon: require('../images/icon_top250.png'),
        index: 0,
    }, {
        title: '最新',
        url: '',
        colors: ['#feaa1a', "#ffd31a"],
        icon: require('../images/icon_praise.png'),
        index: 1,
    }, {
        title: '主题',
        url: '',
        colors: ['#b983ff', "#a35cff"],
        icon: require('../images/icon_north.png'),
        index: 2,
    }, {
        title: '栏目',
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

const Genk_Cate_Types = [
    'Android',
    'iOS',
    '前端'
];


export {Base, App_Name, Cate_Data, Default_Photos, Movie_Types, Theme_Datas, Genk_Cate_Types}