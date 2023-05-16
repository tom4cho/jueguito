window.onload = function(){
    canvas = document.getElementById("canvas");

    if(canvas && canvas.getContext){
        ctx = canvas.getContext("2d");
    }

    if(ctx){
        //definimos colores y cuadrado
        ctx.fillStyle = "yellow";
        ctx.strokeStyle = "#ff0000";
        ctx.lineWidth = 5;
        ctx.fillRect(50, 50, 100, 100);
        ctx.strokeRect(50, 50, 100, 100);
    }else{
        alert("su navegador no soporta canvas")
    }

}

