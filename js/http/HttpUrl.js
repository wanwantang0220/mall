import {httpRequest} from "./HttpRequest";


const HOST = 'https://news-at.zhihu.com/api/4';
const HOST_GANK = 'http://gank.io/api';


//最新消息
const getLatest = (params) => httpRequest(params, HOST + '/news/latest');

//消息内容获取与离线下载  https://news-at.zhihu.com/api/4/news/3892357
const getNewDL = (params) => httpRequest(params, HOST + '/news/' + params.id);

// 过往消息 URL:https://news-at.zhihu.com/api/4/news/before/20131119
const getOldList = (params) => httpRequest(params, HOST + '/news/before/' + params.period);

//主题日报内容查看  URL:https://news-at.zhihu.com/api/4/theme/11
const getTheme = (params) => httpRequest(params, HOST + '/theme/' + params.themeId);

//主题日报列表查看 URL:https://news-at.zhihu.com/api/4/themes
const getThemes = (params) => httpRequest(params, HOST + '/themes');


//新闻额外信息 URL: https://news-at.zhihu.com/api/4/story-extra/#{id}
const getExtra = (params) => httpRequest(params, HOST + '/story-extra/' + params.id);


//新闻对应长评论查看 URL: https://news-at.zhihu.com/api/4/story/8997528/long-comments
const getLongComments = (params) => httpRequest(params, HOST + '/story/' + params.id + '/long-comments');

// 新闻对应短评论查看 URL: https://news-at.zhihu.com/api/4/story/4232852/short-comments
const getShortComments = (params) => httpRequest(params, HOST + '/story/' + params.id + '/short-comments');


//热门消息 URL: https://news-at.zhihu.com/api/3/news/hot
const getHot = (params) => httpRequest(params, HOST + '/news/hot');

//栏目总览 URL: https://news-at.zhihu.com/api/3/sections
const getSections = (params) => httpRequest(params, HOST + '/sections');

//栏目总览 URL: https://news-at.zhihu.com/api/3/section/1
const getSectionsAbout = (params) => httpRequest(params, HOST + '/section/' + params.id);

//查看新闻的推荐者 URL: https://news-at.zhihu.com/api/4/story/#{id}/recommenders
const getRecommenders = (params) => httpRequest(params, HOST + '/story/' + params.id + '/recommenders');

//获取某个专栏之前的新闻 URL: https://news-at.zhihu.com/api/4/section/#{section id}/before/#{timestamp}
const getSection = (params) => httpRequest(params, HOST + '/section/' + params.id + '/before/' + params.timestamp);


//获取最新一天的干货 http://gank.io/api/today
const getGankToday = (params) => httpRequest(params, HOST_GANK + '/today');

//获取闲读的主分类 http://gank.io/api/xiandu/categories
//category 后面可接受参数为主分类返回的en_name,例如【apps， wow， android，iOS】
const getGankCate = (params) => httpRequest(params, HOST_GANK + '/xiandu/categories');

//获取闲读的子分类 http://gank.io/api/xiandu/category/wow
const getGankCateNow = (params) => httpRequest(params, HOST_GANK + '/xiandu/category/wow');

//获取闲读数据 http://gank.io/api/xiandu/data/id/appinn/count/10/page/1
//id 后面可接受参数为子分类返回的idpage 第几页，从1开始  count 每页的个数
const getGankAppinn = (params) => httpRequest(params, HOST_GANK + '/xiandu/data/id/appinn/count/' + params.pagecount + '/page/' + params.page);

//获取某几日干货网站数据:http://gank.io/api/history/content/2/1   注： 2 代表 2 个数据，1 代表：取第一页数据
const getGankContent = (params) => httpRequest(params, HOST_GANK + '/history/content/' + params.pagecount + '/' + params.page);


//获取特定日期网站数据 http://gank.io/api/history/content/day/2016/05/11
const getGankDayContent = (params) => httpRequest(params, HOST_GANK + '/history/content/day/' + params.year + '/' + params.month + '/' + params.day);

// http://gank.io/api/data/数据类型/请求个数/第几页
// 数据类型： 福利 | Android | iOS | 休息视频 | 拓展资源 | 前端 | all
// https://gank.io/api/data/Android/10/1
const getGankTypeContent = (params) => httpRequest(params, HOST_GANK + '/data/' + params.type + '/' + params.pagecount + '/' + params.page);

//返回成功
const RESULT_OK = "000000";

export default {
    getLatest,
    getNewDL,
    getOldList,
    getTheme,
    getThemes,
    getExtra,
    getLongComments,
    getShortComments,
    getHot,
    getSections,
    getSectionsAbout,
    getRecommenders,
    getSection,
    getGankToday,
    getGankCate,
    getGankCateNow,
    getGankAppinn,
    getGankContent,
    getGankDayContent,
    getGankTypeContent
}




