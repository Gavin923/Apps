$(function() {
	// //用户名显示
	// var a = $.cookie("loginUser");
	// console.log(a);
	// if(a) {
	// 	$("#p").html("您好：" + a + "用户！" + "<a class='exit'>退出</a>");
	// } else {
	// 	$("#p").html();
	// }
	// $(".exit").click(function() {
	// 	$(this).css("cursor", "pointer")
	// 	$.cookie("loginUser", "", {
	// 		expires: 20,
	// 		path: "/"
	// 	})
	// 	window.location.reload();
	// })

	//商品列表移入移出
	$("#nav_feiLei").mouseenter(function() {
		$(".sideNav").show();
		var navLit = $(".navList");

		navLit.mouseenter(function() {
			$(this).find("ul").show().parent().siblings().find("ul").hide();
			$(this).find("h3 a").removeClass().addClass("change").parent().parent().siblings().find("h3 a").removeClass("change")
			$(this).find("h3").addClass("fuck").parent().siblings().find("h3").removeClass("fuck");
		});

		navLit.mouseleave(function() {
			$(this).find("ul").hide();
			$(this).find("h3 a").removeClass("change");
			$(this).find("h3").removeClass("fuck");

		})
	})
	$(".sideNav").mouseleave(function() {
		$(".sideNav").hide();
	});

})
//获取cookie
$(function() {

	var goodsList = $.cookie("cart");

	if(goodsList) {

		$("#Tr").css("display", "none");
		$("table tfoot").show();
		goodsList = JSON.parse(goodsList);
		console.log(goodsList);

		for(var i = 0; i < goodsList.length; i++) {
			var goods = goodsList[i]; //每个商品
			//创建节点
			var td1 = $("<td></td>");
			var p = $("<p></p>");
			var img = $("<img>");
			img.attr("src", goods.img);
			img.css("float", "left");
			var avt = $("<a>" + goods.name + ",颜色：" + goods.color + "</a>");
			p.append(img, avt);
			p.css({
				"line-height": "18px",
				fontSize: "16px",
				"text-align": "left",
			});
			td1.append(p);
			var td2 = $("<td>" + goods.price + "</td>");
			td2.css("font-weight", "bold");
			var td3 = $("<td></td>");
			var b = $("<b class='b'>" + goods.sprice + "</b>");
			td3.append(b);
			b.css("color", "#d90000");
			var td4 = $("<td></td>");
			var a1 = $("<a class='a_left'>-</a>");

			var input1 = $("<input>");
			input1.css({
				width: "60px",
				height: "20px",
				border: "1px solid #ccc"
			})
			input1.attr("value", goods.num);
			input1.attr("readonly", "readonly");
			var a2 = $("<a class='a_right'>+</a>");
			td4.append(a1, input1, a2);
			var td5 = $("<td></td>");
			var prices = goods.sprice.substring(1);
			var strong = $("<strong class='str'>" + "￥" + prices * goods.num + "</strong>");
			td5.append(strong);
			strong.css("color", "#ff0000");
			var td6 = $("<td></td>");
			var a = $("<a class='art'>取消订购</a>");
			a.css("cursor", "pointer");
			td6.append(a);
			var tr = $("<tr class='trnum'></tr>");

			tr.append(td1, td2, td3, td4, td5, td6);
			$("tbody").append(tr);

			$(".special").html("￥" + prices * goods.num);
			$(".number").html($(".trnum").length);
			//把每种商品占据表格的总长度存进新的cookie当中，让其它页面同步
			var b = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
			$(".num_first").html(b.length);
		}
		//清空购物车
		$(".clear").click(function() {
			$.cookie("cart", "", {
				expires: 0,
				path: "/"
			});
			alert("购物车已清除");

			$("table tbody").hide();
			$("table tfoot").hide();
			$("#Tr").show();
			window.location.reload();
		})
		//取消订购
		$(".art").click(function() {
			var i = $(this).index(".art");
			goodsList.splice(i, 1);
			$.cookie("cart", "", {
				expires: 0,
				path: "/"
			});
			$.cookie("cart", JSON.stringify(goodsList), {
				expires: 30,
				path: "/"
			});
			alert("订单已取消！");
			window.location.reload();
			if(!goodsList) {
				$("#Tr").show();
				$("table tfoot").hide();
			}
		});

		//结算
		$(".money").click(function() {
			alert("付款成功");
			$(".art").html("已付款");
			$("table tfoot").hide();
		})
		//数量减少
		$(".a_left").click(function() {
			var t = $(this).parent().parent().find('input');
			t.val(parseInt(t.val()) - 1)
			var con1 = $(this).parent().parent().find(".str");
			var con2 = ($(this).parent().parent().find(".b").html()).substring(1);
			con1.html("￥" + con2 * parseInt(t.val()));
			if(parseInt(t.val()) < 1) {
				t.val(1);
				con1.html($(this).parent().parent().find(".b").html());
			}
			setTotal();
			//当前减少的数量写入cookie
			var i = $(this).index(".a_left");
			goodsList[i].num = t.val();
			$.cookie("cart", "", {
				expires: 0,
				path: "/"
			});
			$.cookie("cart", JSON.stringify(goodsList), {
				expires: 30,
				path: "/"
			});
		})
		//数量增加
		$(".a_right").click(function() {
			var t = $(this).parent().parent().find('input');
			t.val(parseInt(t.val()) + 1)
			var con1 = $(this).parent().parent().find(".str");
			var con2 = $(this).parent().parent().find(".b").html().substring(1);
			con1.html("￥" + con2 * parseInt(t.val()));

			setTotal();
			//当前增加的数量写入cookie
			var i = $(this).index(".a_right");
			goodsList[i].num = t.val();
			$.cookie("cart", "", {
				expires: 0,
				path: "/"
			});
			$.cookie("cart", JSON.stringify(goodsList), {
				expires: 30,
				path: "/"
			});
		})
		//价格总计函数
		function setTotal() {
			var s = 0;
			var t = 0;
			//遍历每一行的商品
			$(".trnum").each(function() {
				var count = $(this).find('.b').html().substring(1);
				s += parseInt($(this).find('input').val()) * count;
				t += parseInt($(this).find('input').val()) * 373;
			});
			$(".special").html("￥" + s);
			$('.fen').html(t)
		}
		setTotal();

	}

})