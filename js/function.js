
$( function() {
	// $('.scroll').css("opacity","0");
	// $('.scrollMove').css("opacity","0" );
	// $('.scrollMove').css("transform","translateY(70px)");
	var isSmartPhone = false;
	var ua = navigator.userAgent;
	if (ua.indexOf("iPhone") > 0 || ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
	{
		isSmartPhone = true;
	}
	if (ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0)
	{
		$(".hero").css("background-attatchment", "scroll");
	}


	var modalProducer = $('[data-remodal-id=modal_producer]').remodal();
	var modalInstructor = $('[data-remodal-id=modal_instructor]').remodal();
	var modalBacknumber = $('[data-remodal-id=modal_backnumber]').remodal();
	var modalWork0 = $('[data-remodal-id=modal_work0]').remodal();
	var modalWork1 = $('[data-remodal-id=modal_work1]').remodal();
	var modalWork2 = $('[data-remodal-id=modal_work2]').remodal();
	var modalWork3 = $('[data-remodal-id=modal_work3]').remodal();
	var modalWork4 = $('[data-remodal-id=modal_work4]').remodal();
	var modalWork5 = $('[data-remodal-id=modal_work5]').remodal();
	var modalWork6 = $('[data-remodal-id=modal_work6]').remodal();
	var modalWork7 = $('[data-remodal-id=modal_work7]').remodal();
	var modalWork8 = $('[data-remodal-id=modal_work8]').remodal();
	var modalWork9 = $('[data-remodal-id=modal_work9]').remodal();
	var modalWork10 = $('[data-remodal-id=modal_work10]').remodal();
	var modalWork11 = $('[data-remodal-id=modal_work11]').remodal();
	var modalWork12 = $('[data-remodal-id=modal_work12]').remodal();
	var modalWork13 = $('[data-remodal-id=modal_work13]').remodal();
	var modalWork14 = $('[data-remodal-id=modal_work14]').remodal();
	var modalWork15 = $('[data-remodal-id=modal_work15]').remodal();
	var modalWork16 = $('[data-remodal-id=modal_work16]').remodal();
	var modalWork17 = $('[data-remodal-id=modal_work17]').remodal();
	var modalWork18 = $('[data-remodal-id=modal_work18]').remodal();
	var modalWork19 = $('[data-remodal-id=modal_work19]').remodal();
	var modalWork20 = $('[data-remodal-id=modal_work20]').remodal();
	var modalWork21 = $('[data-remodal-id=modal_work21]').remodal();
	$("#greeting_producer").click(function() {
		modalProducer.open();
	});
	$("#greeting_instructor").click(function() {
		modalInstructor.open();
	});
	$("#backnumber").click(function() {
		modalBacknumber.open();
	});
	$("#work0").click(function() {
		modalWork0.open();
	});
	$("#work1").click(function() {
		modalWork1.open();
	});
	$("#work2").click(function() {
		modalWork2.open();
	});
	$("#work3").click(function() {
		modalWork3.open();
	});
	$("#work4").click(function() {
		modalWork4.open();
	});
	$("#work5").click(function() {
		modalWork5.open();
	});
	$("#work6").click(function() {
		modalWork6.open();
	});
	$("#work7").click(function() {
		modalWork7.open();
	});
	$("#work8").click(function() {
		modalWork8.open();
	});
	$("#work9").click(function() {
		modalWork9.open();
	});
	$("#work10").click(function() {
		modalWork10.open();
	});
	$("#work11").click(function() {
		modalWork11.open();
	});
	$("#work12").click(function() {
		modalWork12.open();
	});
	$("#work13").click(function() {
		modalWork13.open();
	});
	$("#work14").click(function() {
		modalWork14.open();
	});
	$("#work15").click(function() {
		modalWork15.open();
	});
	$("#work16").click(function() {
		modalWork16.open();
	});
	$("#work17").click(function() {
		modalWork17.open();
	});
	$("#work18").click(function() {
		modalWork18.open();
	});
	$("#work19").click(function() {
		modalWork19.open();
	});
	$("#work20").click(function() {
		modalWork20.open();
	});
	$("#work21").click(function() {
		modalWork21.open();
	});
	var h = $(window).height(); //ブラウザウィンドウの高さを取得
	$('#container').css('display','none'); //初期状態ではメインコンテンツを非表示
	$('#loader-bg ,#loader').height(h).css('display','flex'); //ウィンドウの高さに合わせでローディング画面を表示
	

	$('a.menu').click(function() {
		var target = $(this).attr('data-scrollTo');
		if (target == "home") {
			$('#header').removeClass('fixed-header');
			scrollTo(0,0);
		} else {
			var href = $(this).attr('href');
			ChangeBackGroundGradient(href);
		}
	});

	header = $('#header');
	headerHeight = $('#header').outerHeight();
	headerPos = $('#header').offset().top;

	sectionPos = [
		$('#about').offset().top,
		$('#outline').offset().top,
		$('#works').offset().top,
		$('#access').offset().top,
		$('#staff').offset().top
	];

	windowHeight = $(window).height();
	$(window).scroll(function () {
		var value = $(this).scrollTop();
		if ( value > headerPos ) {
			$('#header').addClass('fixed-header');
			$('body').css('padding-top', headerHeight);
	    } else {
			$('#header').removeClass('fixed-header');
			$('body').css('padding-top', '0');
	    }

		if (!isSmartPhone)
		{
			ControlBackground();
		}
	});

	if (isSmartPhone)
	{
		// $("#main-vis").addClass("hidden");
		$("#asset03").addClass("hidden");
		$("#asset04").addClass("hidden");

		// $("#main-vis-thin").removeClass("hidden");
		$("#hands-sp").removeClass("hidden");
	}
	else
	{
		MainVisEvent();
	}

});
$(window).load(function () {
	$('#loader-bg').delay(900).queue(function() {
		$(this).fadeOut(800).dequeue(); //$('#loader-bg').fadeOut(800);でも可
		// StartAnimation();
	});
	$('#loader').delay(600).fadeOut(300); //$('#loader').fadeOut(300);でも可
	$('#container').css('display', 'block'); // ページ読み込みが終わったらメインコンテンツを表示する
});

// header の fixed/unfixed 切り替え & background color gradient 切り替え
$(window).on('load', function() {

});

// background color gradient ([r,g,b]): [from, to]
bgcolors = [
	[[154,70,169], [37,148,213]], // about
	[[37,148,213], [154,70,169]], // outline
	[[154,70,169], [37,148,213]], // works
	[[37,148,213], [154,70,169]], // access
	[[154,70,169], [37,148,213]], // staff
];
// $(window).on('scroll', function () {
// 	var value = $(this).scrollTop();
	// for (var i = 1; i <= 4; i++) {
	// 	if (value >= sectionPos[i] - windowHeight * 0.6 && value < sectionPos[i] - windowHeight * 0.2) {
	// 		var percentage = (value - sectionPos[i] + windowHeight * 0.6) / (windowHeight * 0.4);
	// 		var gradientFrom = [
	// 			bgcolors[i][0][0]*percentage + bgcolors[i-1][0][0]*(1-percentage),
	// 			bgcolors[i][0][1]*percentage + bgcolors[i-1][0][1]*(1-percentage),
	// 			bgcolors[i][0][2]*percentage + bgcolors[i-1][0][2]*(1-percentage)
	// 		];
	// 		var gradientTo = [
	// 			bgcolors[i][1][0]*percentage + bgcolors[i-1][1][0]*(1-percentage),
	// 			bgcolors[i][1][1]*percentage + bgcolors[i-1][1][1]*(1-percentage),
	// 			bgcolors[i][1][2]*percentage + bgcolors[i-1][1][2]*(1-percentage)
	// 		];
	// 		$("#main").css({
	// 			"background": "linear-gradient(to right, rgb("+ gradientFrom[0] +","+ gradientFrom[1] +","+ gradientFrom[2] +"), rgb("+ gradientTo[0] +","+ gradientTo[1] +","+ gradientTo[2] +"))",
	// 		});
	// 	}
	// }
// });
function ChangeBackGroundGradient(sectionName) {
	var value = $(window).scrollTop();
	var index = 0;
	switch (sectionName) {
		case '#about':
			break;
		case '#outline':
			index = 1;
			break;
		case '#works':
			index = 2;
			break;
		case '#access':
			index = 3;
			break;
	}
}

function StartAnimation()
{
	$("#asset1").delay(3200).queue(function() {
		$(this).addClass("duration-1s animated fadeOut").dequeue();
	});
	$("#asset2").delay(1000).queue(function() {
		$(this).removeClass("hidden").addClass("duration-2s animated fadeIn").dequeue();
	}).delay(2200).queue(function() {
		$(this).removeClass("duration-2s fadeIn").addClass("duration-1s fadeOut").dequeue();
	});
	$("#asset3").delay(1800).queue(function() {
		$(this).removeClass("hidden").addClass("duration-1s animated slideInLeft").dequeue();
	}).delay(1400).queue(function() {
		$(this).removeClass("slideInLeft").addClass("fadeOut").dequeue();
	});
	$("#asset4").delay(6500).queue(function() {
		$(this).addClass("duration-1s animated fadeOut").dequeue();
	});
	$("#asset5").delay(4000).queue(function() {
		$(this).removeClass("hidden").addClass("duration-2s animated fadeIn").dequeue();
	}).delay(2500).queue(function() {
		$(this).removeClass("duration-2s fadeIn").addClass("duration-1s fadeOut").dequeue();
	});
	$("#asset6").delay(5300).queue(function() {
		$(this).removeClass("hidden").addClass("duration-2s animated fadeIn").dequeue();
	}).delay(2000).queue(function() {
		$(this).removeClass("duration-2s fadeIn animated").addClass("magictime vanishOut").dequeue();
	});
}
function ControlScrollClass()
{
	$(".scroll").each(function(){
		var imgPos = $(this).offset().top;    
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > imgPos - windowHeight + windowHeight/5 && scroll < imgPos - windowHeight/10 - 80){
			$(this).css("opacity","1" );
		} else {
			$(this).css("opacity","0" );
		}
	});
	$(".scrollMove").each(function(){
		var imgPos = $(this).offset().top;    
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > imgPos - windowHeight + windowHeight/4){
			$(this).css("opacity","1" );
			$(this).css("transform","translateY(0)");
		} else {
			$(this).css("opacity","0" );
			$(this).css("transform","translateY(70px)");
		}
	});
}
function MainVisEvent()
{
	var index = 0;
	setInterval(function () {
		index++;
		switch (index)
		{
			case 1:
				$("#asset03").removeClass("opacity-1 slideInLeft").addClass("fadeOut");
				$("#asset01").removeClass("fadeOut").addClass("opacity-1 slideInLeft");
				break;
			case 2:
				$("#asset04").removeClass("opacity-1 slideInRight").addClass("fadeOut");
				$("#asset02").removeClass("fadeOut").addClass("opacity-1 slideInRight");
				break;
			case 3:
				$("#asset01").removeClass("opacity-1 slideInLeft").addClass("fadeOut");
				$("#asset03").removeClass("fadeOut").addClass("opacity-1 slideInLeft");
				break;
			case 4:
				$("#asset02").removeClass("opacity-1 slideInRight").addClass("fadeOut");
				$("#asset04").removeClass("fadeOut").addClass("opacity-1 slideInRight");
				index = 0;
				break;
		}
	}, 1000);
}
function ControlBackground()
{
	var currentPos = $(window).scrollTop();
	var windowWidth = $(window).width();
	if (currentPos < sectionPos[3] - windowHeight * 1.4)
	{
		$("#hand-04").addClass("hidden");
		$("#hand-05").addClass("hidden");
		$("#hand-06").addClass("hidden");
	}
	if (currentPos >= sectionPos[3] - windowHeight * 1.4)
	{
		$("#hand-04").removeClass("hidden");
		$("#hand-05").removeClass("hidden");
		$("#hand-06").removeClass("hidden");
	}
	if (currentPos < sectionPos[3] - windowHeight * 0.2)
	{
		$("#hand-01").removeClass("hidden");
		$("#hand-02").removeClass("hidden");
		$("#hand-03").removeClass("hidden");
	}
	if (currentPos >= sectionPos[3] - windowHeight * 0.2)
	{
		$("#hand-01").addClass("hidden");
		$("#hand-02").addClass("hidden");
		$("#hand-03").addClass("hidden");
	}
	if (currentPos >= sectionPos[2] - windowHeight * 0.6 && currentPos < sectionPos[3] - windowHeight * 0.2)
	{
		var percentage = (currentPos - (sectionPos[2] - windowHeight * 0.6))/(sectionPos[3] - sectionPos[2] + windowHeight * 0.4);
		$("#hand-01").css("left", String(100 * percentage)+"%");
		$("#hand-02").css("left", String(-100 * percentage)+"%");
		$("#hand-03").css({"left": String(100 * percentage)+"%", "top": String(-100 * percentage)+"%"});
	}
	if (currentPos >= sectionPos[3] - windowHeight * 1.4 && currentPos < sectionPos[4] - windowHeight * 1.0)
	{
		var percentage = (currentPos - (sectionPos[3] - windowHeight * 1.4))/(sectionPos[4] - sectionPos[3] + windowHeight * 0.4);
		$("#hand-04").css("left", String(100 * (1 - percentage))+"%");
		$("#hand-05").css("left", String(-100 * (1 - percentage))+"%");
		$("#hand-06").css("top", String(100 * (1 - percentage))+"%");
	}
}

$(window).on('resize', function () {
	windowHeight = $(window).height();
});