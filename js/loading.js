window.addEventListener("scroll", noScroll)

function onLoadEvent(){
	window.removeEventListener("scroll", noScroll);
    document.querySelector(".initialBody").style.display = "none";
}

function noScroll(){
    window.scrollTo(0, 0);
}