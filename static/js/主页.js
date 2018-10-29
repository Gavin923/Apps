$(function() {
	//同步用户名
	var a = $.cookie("loginUser");
	if(a) {
		$("#p").html("您好：" + a + "用户！" + "<a class='exit'>退出</a>");
	} else {
		$("#p").html();
	}
	$(".exit").click(function() {
		$(this).css("cursor", "pointer")
		$.cookie("loginUser", "", {
			expires: 20,
			path: "/"
		})
		window.location.reload();
	})
	//同步购物车商品数量
	var b = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
	$(".num_first").html(b.length);
})
$(function() {
	$("#txt").focus(function() {
		$(this).val("")
	});
	$("#txt").blur(function() {
		$(this).val("多搜搜，意外惊喜等你拿");
	});

	$("#p2").click(function() {
		location.href = "/cart/";
	})
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

//导航轮播图
$(function() {
	var len = $(".slider li").length;
	var index = 0;
	var timer = setInterval(function() {
		index++;
		show();
	}, 3000);

	$("#slider_tab li").mouseenter(function() {
		clearInterval(timer);
		var i = $(this).index();
		index = i;
		show();
	});
	$("#slider_tab li").mouseleave(function() {
		timer = setInterval(function() {
			index++;
			show();
		}, 3000);
	})

	function show() {
		if(index == len) {
			index = 0;
		} else if(index < 0) {
			index = len - 1;
		}
		$(".slider").find("li").eq(index).animate({
			opacity: 1
		}).siblings().animate({
			opacity: 0
		});
		$("#slider_tab").find("li").eq(index).addClass("tab").siblings().removeClass("tab");
	};

})

//商品秒杀
$(function() {
	var ul = $("#shoping_tf");
	var li = $("#shoping_tf li");
	li.click(function() {
		$(this).removeClass().addClass("active").siblings().removeClass();
	})
	$.get("../json/miaosha.json", function(data) {
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var dl = $("<dl class='shoping_phone'></dl>");
			var img = $("<img>");
			var a = $("<a></a>");
			imgsrc = "{% static '" + obj.img + "' %}"
			img.attr("src", imgsrc);
			console.log(imgsrc)
			var dt = $("<dt></dt>");
			var dd1 = $("<dd class='phone_title'>" + obj.content + "</dd>");
			var dd2 = $("<dd>" + obj.sore + "</dd>");
			var span = $("<span>" + obj.price + "</span>")
			var strong = $("<strong>" + obj.mark + "</strong>");
			var dd3 = $("<dd>" + obj.miao + "</dd>");
			a.append(img);
			dt.append(a);
			dd2.append(span, strong);
			dl.append(dt, dd1, dd2, dd3);
			$("#shoping_left").append(dl);
		}
		var length = $(".shoping_phone a img").length;
		console.log(length);
		$(".shoping_phone a img").eq(0).click(function() {
			location.href = "/showdetails";
		})
		$(".shoping_phone a img").eq(1).click(function() {
			location.href = "商品详情2.html";
		})
		$(".shoping_phone a img").eq(2).click(function() {
			location.href = "商品详情3.html";
		})
		$(".shoping_phone a img").eq(3).click(function() {
			location.href = "商品详情4.html";
		})
	})

})

//创建手机列表
$(function() {
	$.get("json/phone.json", function(data) {
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var ul = $("<ul></ul>");
			var li = $("<li></li>");
			var a1 = $("<a></a>");
			var img = $("<img>");
			img.attr("src", obj.img);
			var p = $("<p></p>");
			var a2 = $("<a>" + obj.content + "</a>");
			var b = $("<b>" + obj.price + "</b>");
			a1.append(img);
			p.append(a2);
			li.append(a1, p, b);
			ul.append(li);
			$("#phone_list").append(ul);

		}
	});
	// 会员促销鼠标划过
	$("#sale_bottom img").mouseenter(function() {
		$(this).css("opacity", "0.6").siblings().css("opacity", "1");
	})
	$("#sale_bottom img").mouseleave(function() {
		$(this).css("opacity", "1");
	})
})

// 手机数码轮播图
$(function() {
	var len = null;
	$.get("json/shumalunbo.json", function(data) {
		for(var i = 0; i < data.length; i++) {
			var str = data[i];
			var a = $("<a></a>");
			var Img = $("<img>");
			Img.attr("src", str.img);
			a.append(Img);
			$("#bigImg").append(a);
		}
		len = $("#bigImg").find("a").length;
	});
	var index = 0;
	var timer = setInterval(function() {
		index++;
		show();
	}, 3000);

	function show() {
		if(index == len) {
			index = 0;
		} else if(index < 0) {
			index = len - 1;
		}
		$("#bigImg").children("a").eq(index).animate({
			opacity: 1
		}).siblings().animate({
			opacity: 0
		});
	}
});

//礼品箱包轮播图
$(function() {
	var index = 0;
	var len = $("#box_bottom").find("a").length;

	var timer = setInterval(function() {
		index++;
		show();
	}, 3000);

	function show() {
		if(index == len) {
			index = 0;
		} else if(index < 0) {
			index = len - 1;
		}
		$("#box_bottom").find("a").eq(index).animate({
			opacity: 1
		}).siblings().animate({
			opacity: 0
		});
	}
})

// 厨房用具轮播图
$(function() {

	var index = 0;
	var len = $("#left_b").find("a").length;

	var timer = setInterval(function() {
		index++;
		show();
	}, 3000);

	function show() {
		if(index == len) {
			index = 0;
		} else if(index < 0) {
			index = len - 1;
		}
		$("#left_b").find("a").eq(index).animate({
			opacity: 1
		}).siblings().animate({
			opacity: 0
		});
	}
})
//电脑办公轮播
$(function() {
	var index = 0;
	var len = $("#right_b_img").find("a").length;

	var timer = setInterval(function() {
		index++;
		show();
	}, 3000);

	function show() {
		if(index == len) {
			index = 0;
		} else if(index < 0) {
			index = len - 1;
		}
		$("#right_b_img").find("a").eq(index).animate({
			opacity: 1
		}).siblings().animate({
			opacity: 0
		});
	}
})

//服饰鞋帽轮播图
$(function() {
	var i = 0;
	var len = $("#bottom_left").find("a").length;

	var timer = setInterval(function() {
		i++;
		show();
	}, 4000);

	function show() {
		if(i == len) {
			i = 0;
		} else if(i < 0) {
			i = len - 1;
		}
		$("#bottom_left").find("a").eq(i).animate({
			opacity: 1
		}).siblings().animate({
			opacity: 0
		});
	}
})

//个护化妆轮播图
$(function() {
	var index = 0;
	var len = $("#dressImg").find("a").length;

	var timer = setInterval(function() {
		index++;
		show();
	}, 4000);

	function show() {
		if(index == len) {
			index = 0;
		} else if(index < 0) {
			index = len - 1;
		}
		$("#dressImg").find("a").eq(index).animate({
			opacity: 1
		}).siblings().animate({
			opacity: 0
		});
	}
})