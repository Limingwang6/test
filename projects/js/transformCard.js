$(()=>{
    var WIDTH=655, HEIGHT=342,r=10, bsPosition=10;
    $(".bg").css({
        height:innerHeight,
        backgroundSize: "100%"
    });
    var $wrapper=$(".wrapper2");
    $(".superMask").mousemove(e=>{
        var x=e.offsetX, y=e.offsetY;
        var rx=(x-WIDTH/2)/(WIDTH/2),
            ry=(HEIGHT/2-y)/(HEIGHT/2);
        var x_deg=r*ry;
        var y_deg=r*rx;
        $wrapper.css({
            transform: `rotatex(${x_deg}deg) rotatey(${y_deg}deg)`,
            boxShadow:`${-bsPosition*rx}px ${-bsPosition*ry}px 58px #0f0f0f`
        })
    }).mouseout(e=>{
        $wrapper.css({transform:"",boxShadow:""})
    });
})