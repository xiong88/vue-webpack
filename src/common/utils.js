export function is_weixn() {
    let ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}
/**
 * 计算时间差
 * startTime、endTime均为时间戳
 * @param startTime 开始时间
 * @param endTime   结束时间
 * @returns {string}
 */
export function timeDiff(startTime, endTime) {
    let date3 = endTime - startTime;
    //计算出相差天数
    let days = Math.floor(date3 / (24 * 3600 * 1000))
    //计算出小时数
    let leave1 = date3 % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
    let hours = Math.floor(leave1 / (3600 * 1000))
    //计算相差分钟数
    let leave2 = leave1 % (3600 * 1000)        //计算小时数后剩余的毫秒数
    let minutes = Math.floor(leave2 / (60 * 1000))
    //计算相差秒数
    let leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
    let seconds = Math.round(leave3 / 1000)
    let format = null;
    if (days > 30) {
        let date = new Date(startTime);
        format = (date.getMonth() + 1) + "月" + date.getDate() + "日";
    } else if (days >= 1) {
        format = days + ' 天前';
    } else if (hours >= 1) {
        format = hours + ' 小时前';
    } else if (minutes >= 1) {
        format = minutes + ' 分前';
    } else {
        format = seconds + ' 秒前';
    }
    return format;
}
/**
 * 时间戳转成时间格式    1326256200000  =>  '2012-01-11 12:30:00'
 * @param value
 * @param showTime  是否显示时分秒
 * @returns {*}
 */
export function formatDate(value, showTime) {
    if (!value) return null;
    let _date = new Date(value),
        year = _date.getFullYear(),
        month = _date.getMonth() + 1,
        date = _date.getDate(),
        hours = _date.getHours(),
        mins = _date.getMinutes(),
        second = _date.getSeconds(),
        _dateTime = null;

    month < 10 && (month = "0" + month);
    date < 10 && (date = "0" + date);
    hours < 10 && (hours = "0" + hours);
    mins < 10 && (mins = "0" + mins);
    second < 10 && (second = "0" + second);
    _dateTime = year + "-" + month + "-" + date;
    if (showTime) {
        _dateTime += " " + hours + ":" + mins + ":" + second;
    }
    return _dateTime;
}
/**
 * 获取时间戳
 *
 *  example:
 *  new Date('2012-01-11 12:30:00').getTime()   =>   1326256200000
 *
 * @export
 * @param {any} value  传入时刻，没有时返回当前时间戳
 * @returns
 */
export function getTimeStamp(value) {
  if (value && typeof value === 'string') {
    return new Date(value).getTime()
  } else {
    return new Date().getTime()
  }
}
/**
 * 判断字符串长度（区分中文和英文）
 * @return object
 */
export function strlen(str) {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    //单字节加1
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      len++;
    }
    else {
      len += 2;
    }
  }
  return len;
}
