const btnAboutme = document.getElementById("btn-aboutme");
    btnAboutme.addEventListener("click", sliderAbautMe);
    btnHome = document.getElementById("btn-home");
    btnHome.addEventListener("click", sliderhome);
    btnResumen = document.getElementById("btn-resume");
    btnResumen.addEventListener("click", sliderresumen);

function sliderAbautMe () {
    let infoabout = document.getElementById("infabout");
    //infoabout.style.transform = "translatex(0)"
    infoabout.style.left=(0);
}

function sliderhome () {
    let infohome = document.getElementById("infohome");
    //infoabout.style.transform = "translatex(0)"
    infohome.style.left=(100);
}
function sliderresumen () {
    let inforesumen = document.getElementById("inforesumen");
    //infoabout.style.transform = "translatex(0)"
    inforesumen.style.left=(0);
}