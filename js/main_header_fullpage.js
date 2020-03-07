$(document).ready(function (){
	var timerWheel = 0;
	
	$('#content').on('mousewheel DOMMouseScroll', function (e) {
		clearTimeout(timerWheel);

		timerWheel = setTimeout(function () {
		  //현재 애니메이트가 일어나고 있으면 함수 강제 종료
		  if ( $('#header').is(':animated') ) return false;

		  var delta = e.originalEvent.wheelDelta || e.originalEvent.detail*-1;
		  //console.log(delta);   //음수:아래로 이동, 양수:위로 이동

		  /*	if      휠내리기(delta변수값이 음수)
				else if 휠올리기(delta변수값이 양수)	*/
		  if (delta < 0) $('#header').stop().animate({top: -76});
		  else if (delta > 0) $('#header').stop().animate({top: 0});
		}, 250);
  });
});