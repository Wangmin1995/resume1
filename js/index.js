// alert(1)  查错

$(function(){

	// 选中所有按钮添加点击事件
	$(".tab .anniu_box .anniu").click(function(){
		// 所有内容隐藏
		$(".tab .content_box ul").hide();
		// num表示点击的按钮是哪个
		var num = $(".tab .anniu_box .anniu").index($(this));
		// 把对应的内容显示出来
		$(".tab .content_box ul").eq(num).show();

		// 把所有的按钮背景色去掉
		$(".tab .anniu_box .anniu").css({
			"background":"rgba(0,0,0,0)"
		})
		// 把对应的按钮的背景色添加
		$(this).css({
			"background":"#4EB2D6"
		})

	})





	$(".backtop").backTop();
	//$(".backtop") 返回按钮父容器 





	// 点击滑动到某个板块
	$("header .content img").click(function () {
		// 滑动板块的距离
        $({dNum:0}).animate({dNum:752},{ 
        	// 滑动的时间
            duration:1000,
            step: function () {
                $(window).scrollTop(this.dNum);
            }
        })
    });





	// 导航滑动效果
    $("nav .nav li:eq(0)").click(function () {
        $({num:$(window).scrollTop()}).animate({num:0},{ 
            duration:1000,
            step: function () {
                $(window).scrollTop(this.num);
            }
        })
    });

    $("nav .nav li:eq(1)").click(function () {
        $({num:$(window).scrollTop()}).animate({num:752},{ 
            duration:1000,
            step: function () {
                $(window).scrollTop(this.num);
            }
        })
    });

    $("nav .nav li:eq(2)").click(function () {
        $({num:$(window).scrollTop()}).animate({num:1350},{ 
            duration:1000,
            step: function () {
                $(window).scrollTop(this.num);
            }
        })
    });

    $("nav .nav li:eq(3)").click(function () {
        $({num:$(window).scrollTop()}).animate({num:2077},{ 
            duration:1000,
            step: function () {
                $(window).scrollTop(this.num);
            }
        })
    });

    $("nav .nav li:eq(4)").click(function () {
        $({num:$(window).scrollTop()}).animate({num:3600},{ 
            duration:1000,
            step: function () {
                $(window).scrollTop(this.num);
            }
        })
    });







})