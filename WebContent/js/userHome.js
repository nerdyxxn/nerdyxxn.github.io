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


// 타이머 설정 이벤트
let index = 0;
let valueTotal = 0;
let value = 0;
let time = 0;
let val = 0;
let per = 0;
let maxValue = 0;
let parseMax = 0;
let hourMax = "";
let minMax = "";
let parseTotal = 0;
let hour = "";
let min = "";
let sec = "";

function timeSet() {
    clearInterval(time); // timer 초기화
    document.getElementById("myBar").style.width = "0%"; // myBar 초기화

    if (document.getElementById("myBar").classList == 'active') {
        alert("이미 실행중입니다!");
        timeReset();
    } else {
        valueHour = parseInt($(".default_option_hour li div").attr('id')); // selected 값 가져오기 (시)
        value = parseInt($(".default_option li div").attr('id')); // selected 값 가져오기 (분)
        valueTotal = valueHour + value; // 타이머를 위한 valueTotal

        maxValue = valueHour + value;
        parseMax = parseInt(maxValue / 60); // 설정한 전체 시간 (분 기준)
        hourMax = parseInt(parseMax / 60); // 시 계산
        minMax = parseInt(parseMax % 60); // 분 계산

        document.getElementById('maxValue').innerHTML = hourMax + "시간" + minMax + "분";
        document.getElementById('myBar').classList.add("active");

        time = setInterval('timer()', 1000); // 1초마다 timer()함수 호출
    }
}

function timer() {
    valueTotal = valueTotal - 1; // 1씩 빼나가도록 한다. (타이머를 위한 value)
    val = val + 1; // progress bar를 위한 val
    per = (val / maxValue) * 100
    document.getElementById("myBar").style.width = per + "%";

    parseTotal = parseInt(valueTotal / 60); // 설정한 전체 시간 (분 기준)
    hour = parseInt(parseTotal / 60);
    min = parseInt(parseTotal % 60);
    sec = valueTotal % 60;

    document.getElementById('countdown').innerHTML = hour + "시간" + min + "분" + sec + "초 남았습니다!";

    if (per == 25) {
        document.getElementById("startToHalfPoint").style.backgroundColor = "#b8aaed";
    }

    if (per == 50) {
        document.getElementById("halfPoint").style.backgroundColor = "#b8aaed";
    }

    if (per == 75) {
        document.getElementById("halfToEndPoint").style.backgroundColor = "#b8aaed";
    }

    if (valueTotal == 0) {
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
    document.getElementById('myBar').classList.remove("active");
    document.getElementById("startToHalfPoint").style.backgroundColor = "#fff";
    document.getElementById("halfPoint").style.backgroundColor = "#fff";
    document.getElementById("halfToEndPoint").style.backgroundColor = "#fff";
    document.getElementById("endPoint").style.backgroundColor = "#fff";
    document.getElementById('countdown').innerHTML = "";
    document.getElementById('maxValue').innerHTML = "";
}
