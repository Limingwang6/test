$((()=>{
	  ajax({
		 type:"get",
		 url:"indexs.html"
		}).then(data=>{
		  $(".header").html(data);
		});
		 ajax({
		 type:"get",
		 url:"footer.html"
		}).then(data=>{
		  $(".footer").html(data);
		});
		
 function sidebar() {
    $("#side dl").on('click',function () {
        if ($(this).hasClass('open') == false) {
            $("#side dl").removeClass('open').find(".subnav").slideUp();
            var i = $("#side dl").index(this);
            $("#side dl").eq(i).addClass('open').find(".subnav").slideDown();
        };
    });
};

function slide_UpDown(slide_tit, slide_con) {
    $(slide_tit).click(function () {
        if ($(this).hasClass('open') == false) {
            $(slide_tit).removeClass('open').next(slide_con).slideUp();
            var i = $(slide_tit).index(this);
            $(slide_tit).eq(i).addClass('open').next(slide_con).slideDown();

        };
    });
}
		//var kw=location.search.split("?")[1].split("=")[1];
		 var pno=location.search ? location.search.split("?")[1].split("=")[1] : 1;
		 var pagination=document.querySelector(".pagination");
		 var product=document.querySelector(".product_list");
		pagination.onclick=e=>{
			 e.preventDefault();
			//console.log(111);
			var tar=e.target;
			if(tar.nodeName=="A"&&!tar.className.endsWith("disabled")
				&&tar.className!="current"){
				switch(tar.innerHTML){
					case "上一页": break;
					case "下一页": break;
					default: load(tar.innerHTML);
				}  
			}
		}
	function load(pno=1){
    var data=/*(kw?"kw="+kw+"&":"")+*/`pno=${pno}`;
		//console.log(data);
    $.ajax({
      type:"get",
      url:"../php/product.php",
  		data
    }).then(output=>{
      var data=output.data; //console.log(data);
      var html="";
      for(var p of data){
        html+=`<div class="product">
					<div class="img">
			     <a href="product_details.html?pid=${p.pid}">
					   <img src="${p.md}" class="md1">
					   <img src="${p.md2}" class="md2">
					 </a>
  			       </div>
				   <div class="product_gallery">
				    <ul>
						  <li class="active">
							  <a href="#">
								  <img src="${p.sm}" alt="">
								</a>
							</li>
						</ul>
				 </div>
				 <h4>
				   <a href=" ">${p.title}</a>
				 </h4>
				 <p class="price">
               ¥${p.prev_price}
             <span class="label">${p.new_sale}</span>
         </p>
				 <p class="salePrice">¥${p.current_price}</p>
  		 </div>`;
      }
      product.innerHTML=html;
      var pno=output.pno,pageCount=output.pageCount,pageNo=output.pageNo;
     var html=`<a href="javascript:;" class="previous ${pno==1?'disabled':''}">上一页</a>`;
      for(var i=1;i<=pageCount;i++){
        html+=`<a data-role="page" href="javascript:;" class="active ${pno==i?'current':''}">${i}</a>`;
      }
     html+=`<a href="javascript:;" class="next ${pno==pageCount?'disabled':''}">下一页</a>`;
	   	pagination.innerHTML=html;

     })
    }
    load(pno);
	slide_UpDown(".subnav");
    sidebar();
	})()
)

			 