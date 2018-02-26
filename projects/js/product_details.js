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

		var pid=location.search ? location.search.split("?")[1].split("=")[1] : 1;
		//console.log(pid);
		var lgdiv=document.querySelector(".lgdiv");
		//console.log(lgdiv);
		var icon_list=document.querySelector(".icon_list");
			//console.log(icon_list);
		var mImg=document.getElementById("mImg");
		//console.log(mImg);
		//mImg.src=p.md;
		var lgDiv=document.querySelector(".lgDiv");
		ajax({
			type:"get",
			url:"../php/product_detail.php",
			data:"pid="+pid,
			dataType:"json"
		 }).then(output=> {
			var info = output.product_info;
			var imgs = output.icon_list;
			mImg.src=imgs[0].md;
			lgDiv.style.backgroundImage = "url("+imgs[0].lg+")";
			var html = "";
			for (var pic of imgs) {
				html += `<li>
										<img src="${pic.sm}" data-lg="${pic.lg}" data-md="${pic.md}"/>
									</li>`;
			}
			icon_list.innerHTML = html;
       /***********放大镜*************/
			icon_list.onmouseover = e=> {
				if (e.target.nodeName == "IMG") {
					var md = e.target.dataset.md,
							lg = e.target.dataset.lg;
					mImg.src = md;
					lgDiv.style.backgroundImage =
						"url(" + lg + ")";
				}
			}
			var superMask =
				document.getElementById("superMask");
			var mask = document.getElementById("mask");
			superMask.onmouseover = e=> {
				mask.style.display =
					lgDiv.style.display = "block";
			}
			superMask.onmouseout = e=> {
				mask.style.display =
					lgDiv.style.display = "none";
			}
			var MSIZE = 200;
			superMask.onmousemove = e=> {
				var x = e.offsetX, y = e.offsetY;
				var top = y - MSIZE / 2, left = x - MSIZE / 2;
				if (top < 0) top = 0;
				else if (top > 618) top = 618;
				if (left < 0) left = 0;
				else if (left > 618) left = 618;
				mask.style.cssText =
					"display:block;top:" + top + "px;left:" + left + "px";
				lgDiv.style.backgroundPosition =
					-16 / 7 * left + "px " + (-16 / 7 * top) + "px";
			}
			//console.log(typeof info);
			var html = "";

			 var html=`<span class="s1">¥${info.prev_price}</span>
						<span class="s2">¥${info.current_price}</span>`;
			$(".PriceModBox").html(html);

			var html=`<dt class="fl">材质</dt>
					<dd><a href="">${info.quality}</a></dd>`;
			$(".props").html(html);

			 var html=`<dt class="fl">规格</dt>
					<dd><a href="">${info.spec}</a></dd>`;
			$(".prop").html(html);

			  var  html=`<dl class="fl">
							  <dt class="fl">商品系列</dt>
								<dd>${info.series}</dd>
							</dl>
							<dl class="fl">
							  <dt class="fl">商品名称</dt>
								<dd>${info.title}</dd>
							</dl>
							<dl class="fl">
							  <dt class="fl">商品货号</dt>
								<dd>111554</dd>
							</dl>
							<dl class="fl">
							  <dt class="fl">材质</dt>
								<dd>${info.quality}</dd>
							</dl>
							<dl class="fl">
							  <dt class="fl">规格</dt>
								<dd>${info.spec}</dd>
							</dl>
							<dl class="fl">
							  <dt class="fl">风格</dt>
								<dd>${info.style}</dd>
							</dl>`;

			  $(".p_attrList").html(html);
		 });
		 /*******加入购物车*********/
		 var cart = document.querySelector(".cart");
      cart.onclick=e=>{
				e.preventDefault();
				ajax({
					type:"get",
					url:"../php/is_login.php"
				}).then(data=>{
					data = JSON.parse(data);
					if(data.ok==1){
						//将location的search按=切割，取第二段保存在变量lid中
						var pid=location.search.split("=")[1];
						var count = document.getElementsByClassName('qty')[0];
						count = count.querySelector('input').value;
						console.log()
						ajax({	
							type:"get",
							url:"../php/add.php",
							data:"pid="+pid+"&count="+count,
							dataType:"text"
						}).then(()=>{
							alert("加入购物车成功!");
							location.href = "shopping_cart.html";
						})
					}else{
						alert("您未登录");
						location="logins.html";
					}
				})
			}

	})()
)
