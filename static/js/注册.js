$(function() {
	$(".num_first").html(b.length);

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
	})
})

//注册
$(function() {
	var email = $("#email");
	var emailTip = $("#emailTip");
	var username = $("#username");
	var usernameTip = $("#usernameTip");
	var pwd1 = $("#pwd1");
	var pwd1Tip = $("#pwd1Tip");
	var pwd2 = $("#pwd2");
	var pwd2Tip = $("#pwd2Tip");
	var ok1 = false;
	var ok2 = false;
	var ok3 = false;
	var ok4 = false;
	var ok5 = false;


	//输入邮箱
	email.on({
		"focus": function() {
			emailTip.html("填写正确的邮箱");
			$(this).css("border-color", "orange");
		},
		"blur": function() {
			$(this).css("border-color", "");
			if(email.val() == "") {
				emailTip.html("邮箱不正确");
			}
			if(email.val() != "") {
				var reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
				if(reg.test(email.val())) {
					emailTip.html("填写对了");
					ok1 = true;
				} else {
					emailTip.html("邮箱格式不正确");

				}
				for(var i = 0; i < users.length; i++) {
					if(users[i].email == $("#email").val()) {
						emailTip.html("邮箱已注册");
						return;
					}
				}

			}
		}
	})
	//输入用户名
	username.on({
		"focus": function() {
			usernameTip.html("4-20英文字符,数字,'_'的组合.");
			$(this).css("border-color", "orange");
		},
		"blur": function() {
			$(this).css("border-color", "");
			if(username.val() == "") {
				usernameTip.html("你输入的用户名不正确");
			}
			if(username.val() != "") {
				var reg = /^[a-zA-Z]\w{4,20}$/;
				if(reg.test(username.val())) {
					usernameTip.html("用户名可以注册");
					ok2 = true;
				} else {
					usernameTip.html("你输入的用户名格式不正确");
				}
				for(var i = 0; i < users.length; i++) {
					if(users[i].name == $("#username").val()) {
						usernameTip.html("用户名已注册");
						return;
					}
				}
			}

		}
	})
	//输入密码

	pwd1.on({
		"focus": function() {
			pwd1Tip.html("6-16位字符");
			$(this).css("border-color", "orange");
		},
		"blur": function() {
			$(this).css("border-color", "");
			if(pwd1.val() == "") {
				pwd1Tip.html("密码不合法，请确认");
			}
			if(pwd1.val() != "") {
				var reg = /^[a-zA-Z]\w{6,16}$/;
				if(reg.test(pwd1.val())) {
					pwd1Tip.html("密码合法");
					ok3 = true;
				} else {
					pwd1Tip.html("密码不合法");
				}
			}

		}
	})
	//重复密码
	pwd2.on({
		"focus": function() {
			pwd2Tip.html("两次密码必须一致");
			$(this).css("border-color", "orange");
		},
		"blur": function() {
			$(this).css("border-color", "");
			if(pwd2.val() == "") {
				pwd2Tip.html("密码不合法，请确认");
			}
			if(pwd1.val() == pwd2.val()) {
				pwd2Tip.html("密码一致");
				ok4 = true;
			} else {
				pwd2Tip.html("密码不一致");
			}

		}
	})
	$("#Txtidcode").on({
		"focus": function() {
			$(this).css("border-color", "orange");
		},
		"blur": function() {
			$(this).css("border-color", "");
		}
	})
	//验证码
	$.idcode.setCode();
	$("#lognUp").click(function() {
		var isby = $.idcode.validateCode();
		if(isby) {
			console.log("验证码输入正确");
			ok5 = true;
		} else {
			// alert("验证码输入错误")
		}


		if(ok1 && ok2 && ok3 && ok4 && ok5) {

		} else {
			// return false;
		}

	})
})

//登录
$(function() {
	var name = $("#user");
	var pwd = $("#pwd");
	name.on({
		"focus": function() {
			$(this).css("border-color", "orange");
		},
		"blur": function() {
			$(this).css("border-color", "");
		}
	})
	pwd.on({
		"focus": function() {
			$(this).css("border-color", "orange");
		},
		"blur": function() {
			$(this).css("border-color", "");
		}
	})
})