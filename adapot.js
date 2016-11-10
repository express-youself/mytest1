function setZoom(){
	var deviceWidth=document.documentElement.clientWidth;
	var scale=deviceWidth/640;
	document.body.style.zoom=scale;
}
setZoom();
window.onresize=function(){
	setZoom();
}