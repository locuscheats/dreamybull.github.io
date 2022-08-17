if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){

	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "% dreamybull", "% dreamybul", "% dreamybu", "% dreamyb", "% dreamy", "% dream", "% drea", "% dre", "dr", "d", "% dr", "% dre", "% drea", "% dream", "% dreamy", "% dreamyb", "% dreamybu", "% dreamybul", "% dreamybull"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
