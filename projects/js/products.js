
    var kw=location.search.split("=")[1]||"";
var product=document.querySelector(".product_list");
    function load(pno=1){
       var data=/*(kw?"kw="+kw+"&":"")+*/`pno=${pno}`;
        console.log(data);
        $.ajax({
            type:"get",
            url:"../php/product.php",
            data
        }).then(output=>{
            var data=output.data; console.log(data);
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

            var pno=output.pno,pageCount=output.pageCount;
            console.log(pno,pageCount);
            var html = "";
            //上一页
            html+=`
                <li class="${pno<=1?'disabled':''}">
                    <a href="${pno>=2?pno-1:1}">上一页</a>
                </li>
            `;
            if(pno-1>0){
                html += `<li><a href="#">${pno-1}</a></li>`;
            }
            html += `<li class="active"><a href="#">${pno}</a></li>`;
            if(pno+1<=pageCount){
                html += `<li><a href="#">${pno+1}</a></li>`;
            }
            html+=`
                <li class="${pno>=pageCount?'disabled':''}">
                    <a href="${pno<pageCount ? pno+1 :pno}">下一页</a>
                </li>
            `;
            $(".pagination").html(html);

    });
}
  load();
$(".pagination").on("click","li a",function(e){
    e.preventDefault();
    var text=$(this).html();
    if(text=="上一页"||text=="下一页"){
        var pnop=$(this).attr("href");
        load(pnop);
    }else{
        var pno=$(this).html();
        load(pno);
    }
});