function getTime(time) {
    // 比如需要这样的格式 yyyy-MM-dd hh:mm:ss
    let result;
    time = time * 1000;
    let date = new Date(time);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = date.getDate() + ' ';
    let h = date.getHours();
    if (h > 0 && h < 10) {
        h = '0' + h;
    }

    let m = date.getMinutes();
    if (m > 0 && m < 10) {
        m = ':' + '0' + m;
    } else {
        m = ':' + m;
    }
    let s = ':' + date.getSeconds();
    result = Y + M + D + h + m;
    return result;
}


module.exports = {
    getTime: getTime
};