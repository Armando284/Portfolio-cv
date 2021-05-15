/*const btnAboutme = document.getElementById("btn-aboutme");
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
}*/

var divOpen = '';

document.addEventListener('DOMContentLoaded', () => {

    const btnAboutme = document.getElementById("btn-aboutme");
    const divOpenAbout = document.getElementById("infabout");
    btnAboutme.addEventListener('click', () => {
        open(divOpenAbout);   
    }
)
})

    const btnResume = document.getElementById("btn-resume");
    const divOpenResume = document.getElementById("inforesaumen");
    btnResume.addEventListener('click', () => {
        open(divOpenResume);   
    }
)

function open(elemento) {
    if(divOpen != null) {
        cerrar(divOpen)
    }
    elemento.style.left=(0);
    divOpen = elemento;
}

function cerrar(elemento) {
    elemento.style.left='200%';
}
