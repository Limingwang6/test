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
            //$("#totalPrice").text(0.00);
            $("#totalamount").text(0.00);
            $('#productcount').text(0);
        }
    })
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
                var iid = $(this).parent().parent().siblings('.checkbox').children('.item_pic').attr('id');
                $.ajax({
                    type: 'POST',
                    url: '../php/updateCart.php',
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
                var newamo = parseInt($('#totalPrice').text()) - parseInt($(this).parent().parent().siblings('.items').children('#totalPrice').text());
				$('#totalamount').text(newamo.toFixed(2));
                    var iid = $(this).parent().parent().siblings('.checkbox').children('.item_pic').attr('id'); $.ajax({
                        type: 'POST',
                        url: '../php/updateCart.php',
                        data: { iid: iid, checked: 0 },
                        success: function(result) {
                            console.log(result);
                        }
                    })
                }
            });
        // 单独
        function amountadd() {
            var amo = 0;
            $('.check').each(function() {
                if ($(this).hasClass('true')) {
                    amo += parseInt($(this).parent().parent().siblings(".totel").children('#totalPrice').text());
                }
            })
            $('#totalPrice').text(amo.toFixed(2));
        }
        //删除当前行
        /*$(".items").on("click", ".del_d", function(e) {
            e.preventDefault();
            var me = this;
            var id = $(this).parent().siblings(' .items').children('.item_pic').attr('id');
            console.log(id);
            $('.modal').show();
            $('.no').click(function() {
                $('.modal').hide();
            });
            $('.yes').click(function() {
                $.ajax({
                    type: "get",
                    url: "../php/delete.php",
                    data: { iid: id },
                    success: function(result) {
                        $('.modal').hide();
                        if (result.code == 200) {
                            $(me).parent().parent().remove();
                        } else {
                            alert('<b>删除失败！</b><p>错误原因为：' + result.msg + '</p>')
                        }
                    }
                });
            })
        });*/

     