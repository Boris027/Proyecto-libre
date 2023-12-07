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
    
    document.getElementById(element).style.right="0px";
    document.getElementById(element).style.width="240px";
    document.getElementById(element).style.opacity="1";
    document.getElementById(element).style.transition="2s";
}

function cerrarsidebar(element){
    document.getElementById(element).style.right="-70px";
    document.getElementById(element).style.width="0px";
    document.getElementById(element).style.transition="1s";
    document.getElementById(element).style.opacity="0";
}

function segundaimagen(element){
    
    document.getElementById(element).style.display="none";
}

function segundaimagen2(element){
    
    document.getElementById(element).style.display="flex";
    
}








