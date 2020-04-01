/*
* @Author: Administrator
* @Date:   2018-01-17 15:17:48
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-21 22:39:23
*/
$(function(){
	var timer;
	timer=setTimeout(function(){
		$('.screen1 .logo').addClass('logo_anim');
		$('.screen1 .logotext').addClass('logotext_anim');
	$('.screen1 .text').removeClass('del');
	},1)
		
	
	var num=0;
	$('ol li').click(function(event) {
		var index=$(this).index();
		num=index;
		$(this).addClass('content');
		$(this).siblings().removeClass('content');
		$('section').animate({'top':-index*100+'%'});
		$('.logotext').eq(index).parent().parent().siblings().children().children('p.logotext').removeClass('logotext_anim');
		$('.logo').eq(index).parent().parent().siblings().children().children('p.logo').removeClass('logo_anim');
		$('.logo').eq(index).addClass('logo_anim');
		$('.logotext').eq(index).addClass('logotext_anim');
		$('.text').eq(index).removeClass('del');
		$('.text').eq(index).parent().parent().siblings().children().children('p.text').addClass('del');
	});	

		
		$(document).mousewheel(function(a,b){
		clearTimeout(timer);
		timer=setTimeout(function(){
				num=num-b;
				if(num<0){
					num=0;
				}
				if(num>6){
					num=6;
				}

				$('.logotext').eq(num).parent().parent().siblings().children().children('p.logotext').removeClass('logotext_anim');
				$('.logo').eq(num).parent().parent().siblings().children().children('p.logo').removeClass('logo_anim');
				$('.logo').eq(num).addClass('logo_anim');
				$('.logotext').eq(num).addClass('logotext_anim');
				$('.text').eq(num).removeClass('del');
				$('.text').eq(num).parent().parent().siblings().children().children('p.text').addClass('del');
				// $('div').stop();
				$('section').animate({'top':-num*100+'%'});
				$('ol li').eq(num).addClass('content');
				$('ol li').eq(num).siblings().removeClass('content')
				// console.log($('section div>p').eq(num));

		},200)
	
	})

		$('#muc').click(function(event) {
 			$(this).toggleClass('music');
			console.log($('audio').hasClass('music'))
			if($(this).hasClass('music')){
				$('audio')[0].currentTime=-2
				$('audio')[0].play();
			}else{
				$('audio')[0].pause();
			}	
		});

		$('footer div>a').hover(function() {
			var index=$(this).index();
				switch(index){
					case 0:$('footer div>a').eq(index).css('background','#228bd6');break;
					case 1:$('footer div>a').eq(index).css('background','#cc3333');break;
					case 2:$('footer div>a').eq(index).css('background','#3aa624');break;
					case 3:$('footer div>a').eq(index).css('background','#c145cc');break;
					case 4:$('footer div>a').eq(index).css('background','#f2ca00');break;
				}			
		}, function() {
			$(this).css('background','transparent')
		});

		$('.moveball').hover(function() {
					$(this).addClass('moveball04')
				}, function() {
					$(this).removeClass('moveball04')
				});
});