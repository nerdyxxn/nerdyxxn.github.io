$(function () {
    setTimeout(function () {
        AOS.init({
                once: true,
                duration: 1000,
            },
            100
        );
    });

    $('.aos-init').removeClass('aos-animate');

    // fullpage customization
    $('#fullpage').fullpage({
        sectionsColor: ['#000', '#fff', '#fff', '#fff'],
        sectionSelector: '.vertical-scrolling',
        slideSelector: '.horizontal-scrolling',
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['홈', '찾기', '매거진', '세라존'],
        slidesNavigation: true,
        controlArrows: false,
        scrollOverflow: true,
        //normalScrollElements: '#section03',
        anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection'],
        menu: '#menu',
        //scrollingSpeed: 1200,

        onLeave: function (index) {
            $(".vertical-scrolling [data-aos]").removeClass("aos-animate");
            $('.aos-init').removeClass('aos-animate');

            /* section 이동했을 때 매거진 슬라이드 원위치(첫페이지)로 돌아가도록 설정 */
            if (index == 3) {
                console.log('slideIndex ::' + index);
            } else {
                toSlide();
            }
        },
        afterLoad: function (anchorLink, index) {
            console.log("afterLoad ::", index);

            if (index == 3) {
                $("#slide01 [data-aos]").addClass("aos-animate");
                $(".bg-left").addClass("aos-animate");
                $.fn.fullpage.setAllowScrolling(false, 'down');
            } else {
                $(".vertical-scrolling.active [data-aos]").addClass("aos-animate");
                $.fn.fullpage.setAllowScrolling(true);
            }
            // index가 4일 때 
            if (index == 4) {
                $('.believe [data-aos]').removeClass('aos-animate');

                $(window).on("scroll", function (e) {
                    var wt = $("html").scrollTop() || $("body").scrollTop();
                    //console.log(wt);
                    if (wt == 0) {
                        $(".over-page").removeClass("active");
                    } else if (wt == 50000) {
                        //console.log("else문 진입");
                        //$(".over-page [data-aos]").addClass("aos-animate");
                    }
                    
                    // 엘리먼트 위치값 가져오기
                    const visionImg = document.querySelector('.left-img-box');
                    const visionImgTop = visionImg.getBoundingClientRect().top;
                    const missionLeftImg = document.querySelector('.left-mission-img');
                    const missionLeftImgTop = missionLeftImg.getBoundingClientRect().top;
                    const missionTitle = document.querySelector('.vision-img');
                    const missionTitleTop = missionTitle.getBoundingClientRect().top;

                    console.log(missionTitleTop);

                    if (visionImgTop < 465) {
                        $(".right-img-box").addClass("mv");
                    } else if (visionImgTop > 465) {
                        $(".right-img-box").removeClass("mv");
                    }

                    if (missionTitleTop < -250) {
                        $(".mission-title").addClass("active");
                        $(".mission-info").addClass("active");
                    }
                    
                    if (missionTitleTop < -500) {
                        $(".mission-left-box").addClass("active");
                        $(".mission-right-box").addClass("active");
                    }

                    if (missionTitleTop < -1100) {
                        $(".left-mission-img").addClass("mv");
                    }
                });

                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    var scrollT = $("html").scrollTop() || $("body").scrollTop();

                    if (e.originalEvent.wheelDelta > 0) {
                        // 올림
                        console.log("올림");
                        $.fn.fullpage.setMouseWheelScrolling(true);
                        $.fn.fullpage.setKeyboardScrolling(true);
                        $("html, body").css({
                            overflow: "hidden",
                        });
                        $("#fullpage").css({
                            position: "relative",
                        });
                    } else {
                        // 내림
                        console.log("내림");
                        $.fn.fullpage.setMouseWheelScrolling(false);
                        $.fn.fullpage.setKeyboardScrolling(false);
                        $("#fullpage").css({
                            position: "fixed",
                        });
                        $("html, body").css({
                            overflow: "visible",
                        });
                        $(".over-page").addClass("active");
                        $(".move-arrow").css('display', 'none');
                    }
                });
                window.addEventListener("touchstart", initTouch);
                window.addEventListener("touchmove", swipeDirection);
            } else {
                $(".over-page").removeClass("active");
            }
        },
    });


    // 터치
    let initialX = null,
        initialY = null;

    function initTouch(e) {
        initialX = `${e.touches ? e.touches[0].clientX : e.clientX}`;
        initialY = `${e.touches ? e.touches[0].clientY : e.clientY}`;
    }

    function swipeDirection(e) {
        if (initialX !== null && initialY !== null) {
            const currentX = `${e.touches ? e.touches[0].clientX : e.clientX}`,
                currentY = `${e.touches ? e.touches[0].clientY : e.clientY}`;

            let diffX = initialX - currentX,
                diffY = initialY - currentY;

            if (Math.abs(diffX) > Math.abs(diffY)) {
                if (0 < diffX) {
                    console.log("to left");
                } else {
                    console.log("to right");
                }
            } else {
                if (0 < diffY) {
                    console.log("to top");
                    $.fn.fullpage.setMouseWheelScrolling(false);
                    $.fn.fullpage.setKeyboardScrolling(false);
                    $("#fullpage").css({
                        position: "fixed"
                    });
                    $(".over-page").addClass("active");
                    $(".move-arrow").css('display', 'none');
                    $("html, body").css({
                        overflow: "visible"
                    });
                } else {
                    console.log("to bottom");
                    var wt = $("html").scrollTop() || $("body").scrollTop();
                    if (wt <= 250) {
                        // alert(wt)
                        $.fn.fullpage.setMouseWheelScrolling(true);
                        $.fn.fullpage.setKeyboardScrolling(true);
                        $("html, body").css({
                            overflow: "hidden"
                        });
                        $(".over-page").removeClass("active");
                        $("#fullpage").css({
                            position: "relative"
                        });
                    }
                }
            }
            initialX = null;
            initialY = null;
        }
    }


    // section03 ------------------------------------------------ Swiper event
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        speed: 700,
        slidesPerView: 1,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChange: function () {
                //console.log('now index :::', swiper.realIndex);
                if (swiper.realIndex === 0) {
                    $("#slide01 [data-aos]").addClass("aos-animate");
                    $("#slide02 [data-aos]").removeClass("aos-animate");
                    $("#slide03 [data-aos]").removeClass("aos-animate");
                } else if (swiper.realIndex === 1) {
                    $("#slide01 [data-aos]").removeClass("aos-animate");
                    $("#slide02 [data-aos]").addClass("aos-animate");
                    $("#slide03 [data-aos]").removeClass("aos-animate");
                } else if (swiper.realIndex === 2) {
                    $("#slide01 [data-aos]").removeClass("aos-animate");
                    $("#slide02 [data-aos]").removeClass("aos-animate");
                    $("#slide03 [data-aos]").addClass("aos-animate");
                }
            },
            slideChangeTransitionEnd: function () {
                var idx = this.activeIndex;
                // 마지막 슬라이드일 경우 fullpage 스크롤 전환 풀기
                if (idx == 2) $.fn.fullpage.setAllowScrolling(true);
            },
        },
    });

    function toSlide() {
        swiper.slideTo(0, 50, false);
    }


    /*---Dropdown---*/
    let dropdownFunction = () => {
        const dropdownArray = document.getElementsByClassName('dropdown-container')
        for (let i = 0; i < dropdownArray.length; i++) {
            let dropdown = dropdownArray[i]
            // dropdown clicked
            dropdown.addEventListener('click', (e) => {
                let target = e.currentTarget
                target.classList.toggle('dropdown-focus')

                // set drowdown value to selected option velue
                let dropdownValue = dropdown.querySelector('.dropdown-value')
                let dropdownMenu = dropdown.querySelector('.dropdown-menu')
                let dropdownItemArray = dropdown.getElementsByClassName('dropdown-item')
                // looping options
                for (let i = 0; i < dropdownMenu.childElementCount; i++) {
                    let dropdownItem = dropdownItemArray[i]
                    dropdownItem.addEventListener('click', () => {
                        dropdownValue.textContent = dropdownItem.textContent;
                    })
                }
            })

            // close if clicked outside of dropdown
            window.addEventListener('click', function (event) {
                if (!dropdown.contains(event.target)) {
                    dropdown.classList.remove('dropdown-focus')
                }
            });
        }
    }
    dropdownFunction()


    // section02 ------------------------------------------------ Filter event
    // 추가
    function removeDuplicates(originalArray, prop) {
        var newArray = [];
        var lookupObject = {};

        for (var i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
        }

        for (i in lookupObject) {
            newArray.push(lookupObject[i]);
        }

        console.log(newArray);
        return newArray;
    }

    let forSearchFilters = [];
    const filterSearchBtnClickFunc = () => {
        $("li.btn-search.isvisible").click(() => {
            const finalSearchFilters = removeDuplicates(forSearchFilters, "id");
            let filterQuery = "";
            let ffQuery = "ff=";
            let sfQuery = "sf=";
            for (let i = 0; i < finalSearchFilters.length; i += 1) {
                if (finalSearchFilters[i].type === "firstfilter") {
                    ffQuery += `${finalSearchFilters[i].id}/`;
                } else if (finalSearchFilters[i].type === "secondfilter") {
                    sfQuery += `${finalSearchFilters[i].id}/`;
                }
            }
            if (ffQuery !== "ff=") {
                ffQuery = ffQuery.substring(0, ffQuery.length - 1);
                filterQuery += ffQuery;
            }
            if (sfQuery !== "sf=") {
                sfQuery = sfQuery.substring(0, sfQuery.length - 1);
                filterQuery += "&";
                filterQuery += sfQuery;
            }
            const finalQuery = `?${filterQuery}`;
            //window.location.href = `/plants${finalQuery}&term=`;
            console.log('finalQuery => ' + finalQuery);
        });
    };


    /* 필터 */
    const filters = [{
            id: "5fabcee867917feda4fa2010",
            name: "#뒤에서 따라오는",
            secondFilters: [{
                    id: "5fabd07267917feda4fa201a",
                    name: "#10대미만"
                },
                {
                    id: "5fabd07567917feda4fa201b",
                    name: "#10대"
                },
                {
                    id: "5fabd07967917feda4fa201c",
                    name: "#20-30대"
                },
                {
                    id: "5fabd07c67917feda4fa201d",
                    name: "#40-60대"
                },
                {
                    id: "5fabd08167917feda4fa201e",
                    name: "#60대이상"
                },
            ],
        },
        {
            id: "5fabceeb67917feda4fa2011",
            name: "#어두운 밤, 귀가 시",
            secondFilters: [{
                    id: "5fabd07267917feda4fa201a",
                    name: "#10대미만"
                },
                {
                    id: "5fabd07567917feda4fa201b",
                    name: "#10대"
                },
                {
                    id: "5fabd07967917feda4fa201c",
                    name: "#20-30대"
                },
                {
                    id: "5fabd07c67917feda4fa201d",
                    name: "#40-60대"
                },
                {
                    id: "5fabd08167917feda4fa201e",
                    name: "#60대이상"
                },
            ],
        },
        {
            id: "5fabcef467917feda4fa2012",
            name: "#갑작스런 공격",
            secondFilters: [{
                    id: "5fabd07267917feda4fa201a",
                    name: "#10대미만"
                },
                {
                    id: "5fabd07567917feda4fa201b",
                    name: "#10대"
                },
                {
                    id: "5fabd07967917feda4fa201c",
                    name: "#20-30대"
                },
                {
                    id: "5fabd07c67917feda4fa201d",
                    name: "#40-60대"
                },
                {
                    id: "5fabd08167917feda4fa201e",
                    name: "#60대이상"
                },
            ],
        },
        {
            id: "5fabcf1667917feda4fa2013",
            name: "#거주공간 침해",
            secondFilters: [{
                    id: "5fabd07267917feda4fa201a",
                    name: "#10대미만"
                },
                {
                    id: "5fabd07567917feda4fa201b",
                    name: "#10대"
                },
                {
                    id: "5fabd07967917feda4fa201c",
                    name: "#20-30대"
                },
                {
                    id: "5fabd07c67917feda4fa201d",
                    name: "#40-60대"
                },
                {
                    id: "5fabd08167917feda4fa201e",
                    name: "#60대이상"
                },
            ],
        },
        {
            id: "5fabcf1a67917feda4fa2014",
            name: "#상대제압이 어려운",
            secondFilters: [{
                    id: "5fabd07267917feda4fa201a",
                    name: "#10대미만"
                },
                {
                    id: "5fabd07567917feda4fa201b",
                    name: "#10대"
                },
                {
                    id: "5fabd07967917feda4fa201c",
                    name: "#20-30대"
                },
                {
                    id: "5fabd07c67917feda4fa201d",
                    name: "#40-60대"
                },
                {
                    id: "5fabd08167917feda4fa201e",
                    name: "#60대이상"
                },
            ],
        },
        {
            id: "5fabcf2067917feda4fa2015",
            name: "#몰래카메라",
            secondFilters: [{
                    id: "5fabd07267917feda4fa201a",
                    name: "#10대미만"
                },
                {
                    id: "5fabd07567917feda4fa201b",
                    name: "#10대"
                },
                {
                    id: "5fabd07967917feda4fa201c",
                    name: "#20-30대"
                },
                {
                    id: "5fabd07c67917feda4fa201d",
                    name: "#40-60대"
                },
                {
                    id: "5fabd08167917feda4fa201e",
                    name: "#60대이상"
                },
            ],
        },
    ];

    filters.forEach(function (val) {
        $(".depth-1 .filter-item-box").append(`<li class="filter-item" filtertype="firstfilter" data=${val.id}>${val.name}</li>`);
    });

    var onedepIdx = 0;
    var twodepIdx = 0;
    $(".depth-1 .filter-item").on("click", function (e) {
        var selectText = $(this).html();
        var idx = $(this).index();
        var list = filters[idx].secondFilters.length;
        onedepIdx = $(this).index();

        if (list) {
            $(".depth-1 .filter-item").css("pointer-events", "none");
            $(".depth-2 .filter-item-box").empty();
            $(".depth-2 .filter-item-box").append(`<li class="btn-prev">이전</li>`);
            filters[idx].secondFilters.forEach(function (val, index) {
                $(".depth-2 .filter-item-box").append(`<li class="filter-item" filtertype="secondfilter" data=${val.id}>${val.name}</li>`);
            });

            setTimeout(function () {
                $.fn.fullpage.moveSlideRight();
            }, 500);
            setTimeout(function () {
                $(".depth-1 .filter-item").css("pointer-events", "auto");
            }, 2500);

            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            forSearchFilters.push({
                type: "firstfilter",
                id: $(this).attr("data"),
            });
        } else {
            $(this).toggleClass("active");
            $(this).siblings().removeClass("active");
            if ($(this).hasClass("active")) {
                forSearchFilters.push({
                    type: "firstfilter",
                    id: $(this).attr("data"),
                });
            } else {
                let willdeleteid = 0;
                for (let i = 0; i < forSearchFilters.length; i += 1) {
                    if (forSearchFilters[i].id === $(this).attr("data")) {
                        willdeleteid = i;
                    }
                }
                forSearchFilters.splice(willdeleteid, 1);
            }
        }
    });

    var checkLen = [];
    var filter2 = [];

    $(document).on("click", ".depth-2 .filter-item", function () {
        var selectText = $(this).html();
        var idx = $(this).index() - 1;
        var list = filters[onedepIdx].secondFilters[idx].length;
        twodepIdx = $(this).index();

        // 검색 버튼 생성
        var isSearchBtn = $(".depth-2 .btn-search").length;
        if (isSearchBtn == 0) {
            $(`<li class="btn-search"><button type="button">검색</button></li>`).appendTo(".depth-2 .filter-item-box");
        }
        if (list) {
            $(".depth-2 .filter-item").css("pointer-events", "none");
            $(".depth-3 .filter-item-box").empty();
            $(".depth-3 .filter-item-box").append(`<li class="btn-prev">이전</li>`);

            if ($(".btn-search").length === 0) {
                $(`<li class="btn-search"><button type="button">검색</button></li>`).appendTo(".depth-2 .filter-item-box");
            }

            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            forSearchFilters.push({
                type: "secondfilter",
                id: $(this).attr("data"),
            });

        } else {
            $(this).toggleClass("active");
            $(this).siblings().removeClass("active");
            if ($(this).hasClass("active")) {
                forSearchFilters.push({
                    type: "secondfilter",
                    id: $(this).attr("data"),
                });
            } else {
                let willdeleteid = 0;
                for (let i = 0; i < forSearchFilters.length; i += 1) {
                    if (forSearchFilters[i].id === $(this).attr("data")) {
                        willdeleteid = i;
                    }
                }
                forSearchFilters.splice(willdeleteid, 1);
            }
        }
        $(".btn-search").addClass("isvisible");
        filterSearchBtnClickFunc();

    });

    $(document).on("click", ".depth-2 .btn-prev", function () {
        forSearchFilters = [];
        checkLen = [];
        var selectText = $(".depth-1 .filter-item.active").html();
        $.fn.fullpage.moveSlideLeft();

        $(".select-text span").html(selectText);
        $(".select-text").addClass("prev");
        twodepIdx;
        setTimeout(function () {
            $(".select-text").removeClass("prev");
        }, 2500);

        var itemCheck = $(".depth-2 .filter-item.active").length;
        if (itemCheck <= 0) {
            $(".depth-1 .filter-item.active").removeClass("active");
            $(".select-text").removeClass("active");
        }
    });


    // 메인 페이지 Top button (회원가입/로그인) 스크롤 이벤트
    var topBtn = $('#main_section05');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            topBtn.addClass('show');
        } else {
            topBtn.removeClass('show');
        }
    });
});