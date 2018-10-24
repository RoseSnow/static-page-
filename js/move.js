var LLi = document.getElementsByClassName("ll")
//var Bt = document.getElementsByClassName("bt")
var Rt = document.getElementById("rt")
LLi.addEventListener("mouseover", overFunc, false)
function overFunc(){
	this.Style.backgroundColor = "red"
}


Rt.addEventListener("mouseover",function(){
	this.Style.backgroundColor = "red"
}, false)
