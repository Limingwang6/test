$((() => {
    ajax({
        type: "get",
        url: "indexs.html"
    }).then(data => {
        $(".header").html(data);
    });
    ajax({
        type: "get",
        url: "footer.html"
    }).then(data => {
        $(".footer").html(data);
    });
    var items = document.querySelector(".items");

    function loadCart() {
        ajax({
            type: "get",
            url: "../php/getCart.php",
            dataType: "json"
        }).then(data => {
            var html = "",
                total = 0,
                selected = 0;
            for (var p of data) {
                html += `<div class="shopping_td">
 				           <ul>
 							<li class="checkbox">
 							   <div class="item_pic"  >
 							       <img src=${p.is_checked=="1"?"../img/true.png":"../img/normal.png"} class="check">
 								   <a href="product_details.html?pid=${p.pid}">
 								      <img src="${p.md}" alt="">
 								   </a>
 							   </div>
 							</li>
 							<li class="product_name">
                                <div class="item_info">
                                    <h3>
                                        <a href="product_details.html?pid=${p.pid}"
                                           id="productname">${p.title}</a>
                                    </h3>
                                    <p id="color">东南亚橡胶木 - 白色</p>
                                    <p id="standard">规格: ${p.spec}</p>
                                </div>
                            </li>
 							<li class="product_price">
                                <div class="item_price">
                                    <p id="price" class="original">￥${p.prev_price}</p>
                                    <p class="red_price" id="disprice">￥${p.current_price}</p>
                                </div>
                            </li>
 							<li class="product_num">
                                <div class="item_num">
                                    <div class="qty">
                                        <input type="text" maxlength="3" value="${p.count}" class="qty_val"
                                        name="quantity">
                                        <button class="plus">+</button>
                                        <button class="minus">-</button>
                                    </div>
                                </div>
                            </li>
 							<li class="product_operate">
                                <div class="item_operate">
                                    <a href="${p.pid}"  class="del_d">[删除]</a>
                                </div>
                            </li>
 					  </ul>
 				 </div>`;
                total =total+(p.current_price * p.count);
                p.is_chcked == 1 && (selected++);
            }
            items.innerHTML = html;
        })
    }
    loadCart();

    $(function() {
            addel();
            $('.shopping_td').each(function() {
                    var price = parseFloat($(this).children('.item_price').children(".red_price").html());
                    var amount = parseFloat($(this).children('.item_num').children('input').val());
                    var amountPrice = price * amount;
                    console.log(amountPrice);
                    $(this).children('.totel').children('#totalPrice').html(amountPrice.toFixed(2));
                })
                //全选
            $(".Cinput").click(function() {
                    amountadd();
                    if ($('.checkbox>label').hasClass('normal')) {
                        $('.checkbox>label').addClass('true').removeClass('normal');
                        $('.checkbox>label>img').attr('src', '../img/true.png');
                        $(".item_pic").each(function() {
                            $(this).addClass('true').removeClass('normal');
                            $(this).children('img').attr('src', '../img/true.png');
                        })
                        totl();
                    } else {
                        $('.checkbox>label').addClass('normal').removeClass('true');
                        $('.checkbox>label>img').attr('src', '../img/normal.png');
                        $('.item_pic').addClass('normal').removeClass('true');
                        $('.item_pic>img').attr('src', '../img/normal.png');
                        $("#totalamount").text(0.00);
                        $('#productcount').text(0);
                    }
                })
                //单选
            $('.items').on('click', '.item_pic', function() {
                amountadd();
                $('.checkbox>label').addClass('normal').removeClass('true');
                $('.checkbox>label>img').attr('src', '../img/normal.png');
                if ($(this).hasClass('normal')) {
                    $(this).addClass('true').removeClass('normal');
                    $(this).children('img').attr('src', '../img/true.png');
                    var amou = parseInt($('#productcount').text());
                    amou++;
                    $('#productcount').text(amou);
                    amountadd();
                    var iid = $(this).parent().siblings('.checkbox').children('.item_pic').attr('id');
                    $.ajax({
                        type: 'POST',
                        url: '../php/update_checked.php',
                        data: { iid: iid, checked: 1 },
                        success: function(result) {
                            console.log(result);
                        }
                    })
                } else {
                    $(this).addClass('normal').removeClass('true');
                    $(this).children('img').attr('src', '../img/normal.png');
                    var amou = parseInt($('#productcount').text());
                    amou--;
                    $('#productcount').text(amou);
                    var newamo = parseInt($('#totalamount').text()) -
                        parseInt($(this).parent().parent().siblings('.totel').children('#totalPrice').text());
                    $('#totalamount').text(newamo.toFixed(2));
                    var iid = $(this).parent().parent().siblings('.checkbox').children('.item_pic').attr('id');
                    $.ajax({
                        type: 'POST',
                        url: '../php/update_checked.php',
                        data: { iid: iid, checked: 0 },
                        success: function(result) {
                            console.log(result);
                        }
                    })
                }
            })

            //删除当前行
            $(".items").on("click", "a.del_d", function(e) {
                e.preventDefault();
                var pid = $(this).attr("href");
                var items = document.querySelector('.items');
                items = items.querySelector('.shopping_td');
                var rs = window.confirm("是否删除指定数据");
                if (!rs) {
                    return; //停止程序执行
                }
                $.ajax({
                    type: "post",
                    url: "../php/del.php",
                    data: { pid: pid },
                    dataType: 'json',
                    success: function(data) {
                        console.log(data);
                        if (data.code == 1) {
                            alert(data.msg);
                            items.remove();
                        } else {
                            alert(data.msg);
                        }
                    },
                    error: function() {
                        alert("网络故障请检查");
                    }
                });
            })
        })
        //小计和加减
        //加
    function addel() {
        $(".items").on('click', '.plus', (function() {
            var $multi = 0;
            var vall = $(this).prev().val();
            vall++;
            $(this).prev().val(vall);
            $multi = (parseInt(vall).toFixed(2) * parseInt($(this).parent().prev().children().eq(1).children().eq(1).text()));
            $(this).parent().next().children().eq(1).text(Math.round($multi).toFixed(2));
            amountadd();
            var id = $(this).parent().siblings('.shopping_td').children('.item_pic').attr('id');
            var num = $(this).prev().val();
            $.ajax({
                type: "POST",
                url: "../php/updateCart.php",
                data: { iid: id, count: num },
                success: function(data) {
                    console.log(data);
                }
            });
        }));
        //减
        $(".items").on('click', '.minus', (function() {
            var $multi1 = 0;
            var vall1 = $(this).val();
            vall1--;
            if (vall1 <= 0) {
                vall1 = 1;
            }
            $(this).next().val(vall1);
            $multi1 = parseInt(vall1) * parseInt($(this).parent().prev().children().eq(1).children().eq(1).text());
            $(this).parent().next().children().eq(1).text(Math.round($multi1).toFixed(2));
            amountadd();
            var id = $(this).parent().siblings('.shopping_td').children('.item_pic').attr('id');
            var num = $(this).next().val();
            $.ajax({
                type: "POST",
                url: "../php/updateCart.php",
                data: { iid: id, count: num },
                success: function(data) {
                    console.log(data);
                }
            });
        }));
    }

    //合计
    function totl() {
        var sum = 0.00;
        var amount = 0;
        $("#totalPrice").each(function() {
            sum += parseInt($(this).text());
            $("#totalamount").text(sum.toFixed(2));
            amount++;
            $('#productcount').text(amount);
        })
    }
    // 单独
    function amountadd() {
        var amo = 0;
        $('.check').each(function() {
            if ($(this).hasClass('true')) {
                amo += parseInt($(this).parent().parent().siblings('.totel').children('#totalPrice').text());
                console.log(amo);
            }
        })
        $('#totalPrice').text(amo.toFixed(2));
    }

})())