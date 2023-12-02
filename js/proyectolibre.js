function mostrar(element){
    document.getElementById(element).style.visibility="visible"; 
    
    
}
function ocultar(element){
    document.getElementById(element).style.visibility="hidden";
}
function overflow(){
    var body = document.body;
    body.style.overflow = 'hidden';
}

function overflowexit(){
    var body = document.body;
    body.style.overflow = 'scroll';
}






function openLeftMenu() {
    document.getElementById("leftMenu").style.display = "block";
  }
  
  function closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
  }
  
  function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
  }
  
  function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
  }