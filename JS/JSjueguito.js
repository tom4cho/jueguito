window.onload = function(){
    canvas = document.getElementById("canvas");

    if(canvas && canvas.getContext){
        ctx = canvas.getContext("2d");
    }

    if(ctx){
        alert("su navegador soporta canvas")
    }else{
        alert("su navegador no soporta canvas")
    }

}

