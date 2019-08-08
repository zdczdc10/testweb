//获取Cookie中某项的值
function getCookieItem(itemName)
{
    if(!(document.cookie.length > 0)) return "";

    var idxStart = document.cookie.indexOf(itemName + "=");
    if (idxStart == -1) return "";

    idxStart = idxStart + itemName.length + 1;
    var idxEnd = document.cookie.indexOf(";", idxStart);
    if (idxEnd == -1) idxEnd = document.cookie.length;

    return usescape(document.cookie.substring(idxStart, idxEnd));
}

// 设置Cookie
function setCookie(itemName, itemValue, expireDays, path, domain)
{
    var str = itemName + "=" + escape(itemValue);
    if (expireDays != "") {
        var now = new Date();
        now.setTime(now.getTime() + expireDays * 24 * 3600 * 1000);
        str += ";expires=" + now.toGMTString();
    }
    if (path != "") {
        str += ";path=" + path;
    }
    if (domain != "") {
        str += ";domain=" + domain;
    }
    document.cookie = str;
}

//界面刷新时弹出加载该界面
window.onload = function() {
	alert('调用界面成功加载该JS1！');
};
