function mostrar(element){
    document.getElementById(element).style.visibility="visible"; 
    
    
}
function ocultar(element){
    document.getElementById(element).style.visibility="hidden";
}
function overflow(){
    var body = document.body;
    body.style.overflow = 'hidden';
    navlist.style.overflow='scroll'
}

function overflowexit(){
    var body = document.body;
    body.style.overflow = 'scroll';
}


function abrirsidebar(element){
    document.getElementById(element).style.left="0px";
    document.getElementById(element).style.transition="2s";
}

function cerrarsidebar(element){
    document.getElementById(element).style.left="110%";
    document.getElementById(element).style.transition="1s";
}








