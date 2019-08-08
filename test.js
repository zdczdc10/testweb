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

//界面刷新时弹出加载该界面
window.onload = function() {
	alert('调用界面成功加载该JS1！');
};
