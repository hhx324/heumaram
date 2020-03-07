$(document).ready(function (){
	// ======== 스크롤을 아래로 내리면 헤더 숨기기 
	var didScroll; 
	var lastScrollTop = 0; 
	var distance = 5; //스크롤이 움직여진 거리(차이)
	var headerHei = $('#header').outerHeight(); 
	
	//스크롤을 움직이면 변수에 true 저장
	$(window).scroll(function () { 
		didScroll = true; 
	}); 
	
	//didScroll변수에 true가 있을 때만(스크롤을 움직일 경우만) 250/1000초 마다 hasScrolled() 함수를 실행함
	setInterval(function () { 
		if (didScroll) { 
			hasScrolled(); 
			didScroll = false; 
		} 
	}, 250); 
	
	function hasScrolled() { 
		var scrollT = $(this).scrollTop(); //스크롤바의 수직 이동거리를 변수에 저장
		
		//스크롤의 움직임이 distance변수에 담긴 5픽셀 이하라면 함수 강제 종료 (Math.abs 절대값)
		if(Math.abs(lastScrollTop - scrollT) <= distance) return; 
		
		if (scrollT > lastScrollTop && scrollT > headerHei){ 
			// Scroll Down 
			$('#header').addClass('nav_hide'); 
		} else { 
			// Scroll Up 
			if(scrollT + $(window).height() < $(document).height()) {
				$('header').removeClass('nav_hide'); 
			} 
		} 
		
		lastScrollTop = scrollT;  //변수에 현재의 스크롤 위치를 저장
	}

});