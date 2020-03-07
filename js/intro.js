$(document).ready(function () {
    //fadeInUp 효과
    var scrollY = 0; //윈도우 상단좌표값
    var timer = 0; //한번만 실행시키기 위한 변수

    $(window).on("scroll", function () {
        clearTimeout(timer);

        timer = setTimeout(function () {
            scrollY = $(this).scrollTop();
            console.log(scrollY);

            $(".fade").each(function () {
                if (scrollY > $(this).offset().top - 600) $(this).stop().animate({
                    opacity: 1,
                    '-ms-filter': '"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"',
                    top: 0
                });
                else $(this).stop().animate({
                    opacity: 0,
                    '-ms-filter': '"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"',
                    top: 40
                });
            });
        }, 100);
    });
        var $cnt3 = $('#cnt3');
        $cnt3.find('button').eq(0).on('click', function () {
        $cnt3.find('div').first().removeClass('select');
        $cnt3.find('div').eq(1).addClass('select');
        $cnt3.find('div').eq(2).addClass('select');
      });
      $cnt3.find('button').eq(1).on('click', function () {
        $cnt3.find('div').eq(1).removeClass('select');
        $cnt3.find('div').eq(0).addClass('select');
        $cnt3.find('div').eq(2).addClass('select');
      });
      $cnt3.find('button').eq(2).on('click', function () {
        $cnt3.find('div').eq(2).removeClass('select');
        $cnt3.find('div').eq(0).addClass('select');
        $cnt3.find('div').eq(1).addClass('select');
      });

      var $cnt4 = $('#cnt4');
      $cnt4.find('a').eq(0).on('click', function () {
        $cnt4.find('div').first().removeClass('select');
        $cnt4.find('div').eq(1).addClass('select');
        $cnt4.find('div').eq(2).addClass('select');
        $cnt4.find('div').eq(3).addClass('select');
        $cnt4.find('div').eq(4).addClass('select');
        $cnt4.find('div').last().addClass('select');
      });
      $cnt4.find('a').eq(1).on('click', function () {
        $cnt4.find('div').first().addClass('select');
        $cnt4.find('div').eq(1).removeClass('select');
        $cnt4.find('div').eq(2).addClass('select');
        $cnt4.find('div').eq(3).addClass('select');
        $cnt4.find('div').eq(4).addClass('select');
        $cnt4.find('div').last().addClass('select');
      });
      $cnt4.find('a').eq(2).on('click', function () {
        $cnt4.find('div').first().addClass('select');
        $cnt4.find('div').eq(1).addClass('select');
        $cnt4.find('div').eq(2).removeClass('select');
        $cnt4.find('div').eq(3).addClass('select');
        $cnt4.find('div').eq(4).addClass('select');
        $cnt4.find('div').last().addClass('select');
      });
      $cnt4.find('a').eq(3).on('click', function () {
        $cnt4.find('div').first().addClass('select');
        $cnt4.find('div').eq(1).addClass('select');
        $cnt4.find('div').eq(2).addClass('select');
        $cnt4.find('div').eq(3).removeClass('select');
        $cnt4.find('div').eq(4).addClass('select');
        $cnt4.find('div').last().addClass('select');
      });
      $cnt4.find('a').eq(4).on('click', function () {
        $cnt4.find('div').first().addClass('select');
        $cnt4.find('div').eq(1).addClass('select');
        $cnt4.find('div').eq(2).addClass('select');
        $cnt4.find('div').eq(3).addClass('select');
        $cnt4.find('div').eq(4).removeClass('select');
        $cnt4.find('div').last().addClass('select');
      });
});