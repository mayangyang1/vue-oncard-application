function pluralize(time, label) {
    if (time === 1) {
        return time + label
    }
    return time + label + 's'
}

export function toKMstr(val) {
    var str = (val / 1000).toFixed(3)
    if (str < 10) {
        str = (val / 1000 * 100).toFixed(0)
        return str + '米'
    } else {
        return (val / 1000).toFixed(0) + '公里'
    }
}

export function toThousandslsFilter(num, digits = 2) {
    if (!num) {
        return parseFloat(0).toFixed(digits)
    }
    return '￥' + (parseFloat(num).toFixed(digits) || 0.00).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

export function toThousandsls4Filter(numStr, digits = 4) {
    if (!numStr) {
        return parseFloat(0).toFixed(digits)
    }
    numStr = numStr + ''
    return '￥' + numStr.replace(/^-?\w+/g, m => m.replace(/(?=(?!\b)(\w{3})+$)/g, ','))
}


export function parseTimeToYMD(time) {
    if (arguments.length === 0) {
        return null
    }
    const reg = /-/g
    var _time = time
    if (reg.test(time)) {
        _time = time.replace(reg, '/')
    }

    const format = '{y}-{m}-{d} {h}:{i}:{s}'
    let date = new Date(_time)
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}

export function reduceStr(txt) {
    const sublen = 90
    if (txt.length > sublen) {
        return `${txt.substr(0, sublen)}...`
    }
    return txt
}
