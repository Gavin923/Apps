$(function() {
	$("#txt").focus(function() {
		$(this).val("")
	});
	$("#txt").blur(function() {
		$(this).val("多搜搜，意外惊喜等你拿");
	});


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
$(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        spaceBetween: 30,
        paginationClickable: true,
        loop: true,

        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        centeredSlides: true,

        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
})

//商品秒杀
$(function() {
	var ul = $("#shoping_tf");
	var li = $("#shoping_tf li");
	li.click(function() {
		$(this).removeClass().addClass("active").siblings().removeClass();
	})

    $('.shoping_phone').find('img').mouseenter(function() {
		$(this).css("opacity", "0.6").siblings().css("opacity", "1");
	})
	$('.shoping_phone').find('img').mouseleave(function() {
		$(this).css("opacity", "1");
	})
})



// 手机数码轮播图
$(function() {
	var len = $("#bigImg").find("a").length;
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