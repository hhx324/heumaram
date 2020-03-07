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

    ////////tab

    //add
    var $tab = $("#exhibitTab .tablist li");
    var xmove = [0, '400px', '800px'];		//translate 시킬 X 좌표값
    var zindex = [1, 2, 0];					//z-index 변경값  

    $('.tab:nth-of-type(2), .tabpanel:nth-of-type(2)').addClass('active').attr('tabIndex', 0);
    //의미적 표현(접근성-state) : 탭버튼 : aria-selected, 탭패널 : aria-hidden
    $('.tab:nth-of-type(2)').attr('aria-selected', true);
    $('.tabpanel:nth-of-type(2)').attr('aria-hidden', false);

    /* 2) 탭버튼에서 키보드를 누르는 이벤트(keydown) - 키보드 제어*/
    $('.tab').on('keydown', function (e) {
        var key = e.keyCode;
        console.log(key); //왼쪽방향키 37 , 오른쪽 방향키 39, 스페이스바 32 , 엔터 13
        switch (key) {
            /* a) 왼쪽 방향키 */
            case 37: //왼쪽 방향키
                $(this).attr('tabIndex', -1);
                if ($(this).hasClass('first')) $(this).siblings('.last').attr('tabIndex', 0).focus();
                else $(this).prev().attr('tabIndex', 0).focus();
                break;
                /* b) 오른쪽 방향키 */
            case 39: //오른쪽 방향키
                $(this).attr('tabIndex', -1);
                if ($(this).hasClass('last')) $(this).siblings('.first').attr('tabIndex', 0).focus();
                else $(this).next().attr('tabIndex', 0).focus();
                break;
            case 36: //HOME 키는 가장 처음으로
                e.preventDefault();
                $(this).siblings('.first').attr('tabIndex', 0).focus();
                break;
            case 35: //END 키는 가장 마지막으로
                e.preventDefault();
                $(this).siblings('.last').attr('tabIndex', 0).focus();
                break;
                /* c) enter, spacebar 탭실행(탭 선택, 탭 클릭) */
            case 32: //스페이스바
            case 13: //엔터
                var $tg = $(this);
                activeOn($tg);
                break;
        }
    });

    //3) 탭 클릭 이벤트
    var change;
    var order;
    $('.tab').on('click', function () {
        var $tg = $(this);
        var tgIdx = $tg.index();

        //클릭한 탭에 의해 위치 이동
        if (tgIdx == 0) change = [1,2,0];
        else if (tgIdx ==1)  change = [0,1,2];
        else change = [2,0,1];

        $tab.each(function  (idx) {
            order = change[idx];
            //가운데 위치하는 탭버튼에 .active 추가
            if (order == 1) $(this).addClass('active').siblings().removeClass();
            $(this).css({transform:'translateX(' + xmove[order] + ')', zIndex: zindex[order]});
        });
        
        activeOn($tg);
    });

    function activeOn($target) {
        $target.addClass('active').attr({
            'aria-selected': true,
            tabIndex: 0
        }).siblings().removeClass('active').attr({
            'aria-selected': false,
            tabIndex: -1
        });
        $('#' + $target.attr('aria-controls')).addClass('active').attr({
            'aria-hidden': false,
            tabIndex: 0
        }).siblings('.tabpanel').removeClass('active').attr({
            'aria-hidden': true,
            tabIndex: -1
        });
    }

    //exhibition

});