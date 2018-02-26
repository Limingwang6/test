$(()=>{
	$.get("footer.html").then(data=>{
	  $(".footer").html(data);
	$.get("indexs.html").then(data=>{
		$("#header").html(data);
	})
	const LIWIDTH=1960;
  $.get("../php/header.php")
		.then(data=>{
	   var html="";
		 for(var img of data){
		   html+=`<li>
              <a href="product.html">
                <img src="${img.img}">
              </a>
            </li>`;
		 }
		 html+=`<li>
              <a href="product.html">
                <img src="${data[0].img}">
              </a>
            </li>`;
		 $ul=$(".banner-img");
		 $ul.html(html).css("width",LIWIDTH*(data.length+1));
		 var $ids=$(".indicators");
		 $ids.html("<li></li>".repeat(data.length))
			   .children().first().addClass("hover");

		 const WAIT=2000,DURA=500;
		 var moved=0,timer=null;
		 function move(dir=1){
		   moved+=dir;
			 $ul.animate({
			  left:-LIWIDTH*moved
			 },DURA,()=>{
				  if(moved==data.length){
					  $ul.css("left",0);
						moved=0;
					}
					$ids.children(":eq("+moved+")")
						  .addClass("hover")
						  .siblings().removeClass("hover")
				})
		 }
   		var timer=setInterval(move,WAIT);
				$(".banner").hover(
					()=>{
				     clearInterval(timer);
						 timer=null;
				  },
					()=>{
					  timer=setInterval(move,WAIT); 
					}
				);

				$(".banner_prev").click(()=>{
				  if(!$ul.is(":animated")){
					   move();
					}
				});
				$(".banner_next").click(()=>{
				  if(!$ul.is(":animated")){
					  if(moved==0){
						  $ul.css("left",-LIWIDTH*data.length);
							moved=data.length;
						}
						move(-1);
					}
			 });

				$ids.on("mouseover","li",function(){
				 var $li=$(this);
				 var i=$li.index();
				 moved=i;
				 $ul.stop(true).animate({
				  left:-LIWIDTH*moved
				 },DURA,()=>{
					 $ids.children(":eq("+i+")").addClass("hover")
						    .siblings().removeClass("hover");
					})
				});
        
   });
  });
}) 

$(()=>{
    var $imgs=$("[data-load=bannersImgs]");
    var n=0,TRANS=10,INTERVAL=2000;
    function moveonce(){
        if(n<3){
            n++;
        }else{
            n--;
            $imgs.css("transition","all.5s linear");
        }
        var left=990*n;
        $imgs.css("margin-left",-left);
        if(n==2){
        setTimeout(()=>{
             n=5;
        setTimeout(()=>{
            $imgs.css("margin-right",left);
            setTimeout(()=>{
                $imgs.css("transition","all .5s linear");
            },50);
        },50);
    },TRANS);
}
}
  timers=setInterval(moveonce,INTERVAL);
	$imgs.mouseover(function(){
	  clearInterval(timers);
	});
	$imgs.mouseout(function(){
	 timers=setInterval(moveonce,INTERVAL);
	});
});
$((()=>{
		var i=1,canShake=true;
		function shake(){
			if(canShake==true){
				canShake=false;
				if(i==4) i=1;
				else i++;

				var arr=[0,1,2,3,4,5,6,7,8,9,10];
				arr.sort((a,b)=>Math.random()<0.5?1:-1);
				arr.sort((a,b)=>Math.random()<0.5?1:-1);
				arr.sort((a,b)=>Math.random()<0.5?1:-1);
				var j=0;
				setInterval(()=>{
					$(`.autumn_lg>.autumn_bg>li>div:eq(${arr[j++]})`).css(
						"backgroundImage",
						`url(../image/${i}.jpg)`
					).addClass("shake");
				},10);
				setTimeout(()=>{
					$(".autumn_lg>.autumn_bg>li>div").removeClass("shake");
					$(".autumn_lg>.autumn_bg>li>a>img")
						.attr("src",`../image/${i}.jpg`);
					canShake=true;
				},700);
			}
		}
		setInterval(shake,3000);
	})()
)