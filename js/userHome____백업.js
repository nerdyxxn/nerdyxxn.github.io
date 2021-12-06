// 사용자 귀갓길 진행상황 토글 이벤트
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        // more then one submenu open?
        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click', {
                el: this.el,
                multiple: this.multiple
            },
            this.dropdown);
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el,
            $this = $(this),
            //this is the ul.submenuItems
            $next = $this.next();

        $next.slideToggle(300);
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            //show only one menu at the same time
            $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        }
    };

    var accordion = new Accordion($('.accordion-menu'), false);
});


// 타이머 설정 이벤트 - 1
let index = 0; // 다른 함수에서도 사용하기 위해 
let maxValue = 0;
let value = 0;
let time = 0;
let val = 0;
let per = 0;
let minMax = ""; //분
let secMax = ""; //초
let min = ""; //분
let sec = ""; //초


function timeSet() {
    clearInterval(time); // timer 초기화
    document.getElementById("myBar").style.width = "0%"; // myBar 초기화
    
    if (document.getElementById("myBar").classList == 'active') {
        alert("이미 실행중입니다!");
        timeReset();
    } else {
        valueHour = parseInt($(".default_option_hour li div").attr('id')); // selected 값 가져오기 (시)
        value = parseInt($(".default_option li div").attr('id')); // selected 값 가져오기 (분)
        maxValue = value;
        //document.getElementById('maxValue').innerHTML = maxValue + "초";
        minMax = parseInt(maxValue / 60); //몫을 계산
        secMax = maxValue % 60; //나머지를 계산
        document.getElementById('maxValue').innerHTML = minMax + "분";
        document.getElementById('myBar').classList.add("active");
    
        time = setInterval('timer()', 1000); // 1초마다 timer()함수 호출
    }
}

function timer() {
    value = value - 1; // 1씩 빼나가도록 한다. (타이머를 위한 value)
    val = val + 1; // (progress bar)
    per = (val / maxValue) * 100

    document.getElementById("myBar").style.width = per + "%";
    //document.getElementById('countdown').innerHTML = value + "</b>초 남았습니다";
    min = parseInt(value / 60); //몫을 계산
    sec = value % 60; //나머지를 계산
    document.getElementById('countdown').innerHTML = min + "분" + sec + "초 남았습니다!";

    if (per == 50) {
        document.getElementById("halfPoint").style.backgroundColor = "#b8aaed";
    }

    if (value == 0) {
        document.getElementById("endPoint").style.backgroundColor = "#b8aaed";
        clearInterval(time);
    }
}


function timeReset() {
    clearInterval(time);
    maxValue = 0;
    value = 0;
    time = 0;
    val = 0;
    per = 0;
    document.getElementById("myBar").style.width = "0%";
    document.getElementById("halfPoint").style.backgroundColor = "#fff";
    document.getElementById("endPoint").style.backgroundColor = "#fff";
    document.getElementById('countdown').innerHTML = "";
    document.getElementById('maxValue').innerHTML = "";
}