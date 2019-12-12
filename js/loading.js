window.addEventListener("scroll", noScroll)

function onLoadEvent(){
	window.removeEventListener("scroll", noScroll);
    //document.querySelector(".initialBody").style.display = "none"; vou manter o loading por uns instantes pra teste, mexe nao pls
}

function noScroll(){
    window.scrollTo(0, 0);
}
