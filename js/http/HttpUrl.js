import {httpRequest} from "./HttpRequest";


const HOST = 'https://news-at.zhihu.com/api/4';

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

//查看新闻的推荐者 URL: https://news-at.zhihu.com/api/4/story/#{id}/recommenders
const getRecommenders = (params) => httpRequest(params, HOST + '/story/' + params.id + '/recommenders');

//获取某个专栏之前的新闻 URL: https://news-at.zhihu.com/api/4/section/#{section id}/before/#{timestamp}
const getSection = (params) => httpRequest(params, HOST + '/section/' + params.id + '/before/' + params.timestamp);


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
    getRecommenders,
    getSection
}



