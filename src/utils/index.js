export function getQueryVariable(variable) {
    var query = window.location.href
    var varArr = query.split('?')

    for (var i = 0; i < varArr.length; i++) {
        if (varArr[i].indexOf('=') > -1) {
            var vars = varArr[i].split('&')
            for (var a = 0; a < vars.length; a++) {
                var value = vars[a].split('=')
                if (value[0] == variable) {
                    return value[1]
                }
            }
        }
    }
    return (false);
}

export function getUrlParam(name) {
    var search = decodeURI(window.location.search);
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
