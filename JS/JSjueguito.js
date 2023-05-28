window.onload = function(){
    canvas = document.getElementById("canvas");

    if(canvas && canvas.getContext){
        ctx = canvas.getContext("2d");
    }

    if(ctx){
        //definiendo primer cubo
        ctx.fillStyle = "#FF0000";
        ctx.strokeStyle = "#FFAAFF";
        ctx.lineWidth = 5;
        ctx.fillRect(50, 50, 150, 150);
        ctx.strokeRect(50, 50, 150, 150);

        //definiendo segundo cubo
        ctx.fillStyle = "rgb(255, 012, 200)";
        ctx.fillRect(250, 50, 150, 150);
        ctx.strokeRect(250, 50, 150, 150);

    }else{
        alert("su navegador no soporta canvas")
    }

}

