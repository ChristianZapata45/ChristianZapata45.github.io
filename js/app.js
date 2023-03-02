//MENU LATERAL
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si el menu esta oculto
        menu.style.display = "none";
        menu_visible = true;
    }
    else{
        menu.style.display = "block";
        menu_visible = false;
    }
}
//OCULTAR MENU UNA VEZ SELECTA UNA OPCION
let links= document.querySelectorAll("nav a")