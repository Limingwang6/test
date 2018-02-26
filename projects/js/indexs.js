$(()=>{
    $(".rnav li:nth-child(2)").click(function(){
        location.href="logins.html";
    })
     $(".rnav li:last-child").click(function(){
        location.href="shopping_cart.html";
    })

		function loadStatus(){
		var $loginList=$("#loginList");
	  var $btnLogin=$(".btnLogin");
		console.log($btnLogin);
		$.get("../php/is_login.php")
		.then(data=>{
			console.log(data);
			if(data.ok==1){
				$loginList.show();
        $btnLogin.hide();
				$("#uname").html(data.uname);
			}else{
				$loginList.hide();
				$btnLogin.show();
			}
		});
	}
		loadStatus();

		$("#logout").click(()=>{
			$.get("../php/logout.php")
				.then(()=>location.reload());
		});

})