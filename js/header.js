$(document).ready(function () {
    //index 로딩시 헤더가 0.5초 동안 보여졌다 2.5초 뒤에 숨기기
    setTimeout(function () {
      $('#mainOpen .open_btn').trigger('click');
    }, 500);
    setTimeout(function () {
      $('#header .close_btn').click();
    }, 2000);

    //index 메뉴 열기
    $('#mainOpen .open_btn').on('click', function () {
      $(this).parent().next().show().stop().animate({top: 0}, 300, function () {
        $(this).prev().hide();
      });

      $('#header .close_btn').on('click', function () {
        //index 메뉴 닫기
        $(this).closest('#header').stop().animate({top: -76}, 300, function () {
          $(this).hide().prev().stop().fadeIn();
        });
      });

      return false;
    });
});