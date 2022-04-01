$(function () {
    setTimeout(() => {
        $(".typer").css({
            "caret-color": "transparent",
        });
    }, 1000);

    if (/webkit.*mobile/i.test(navigator.userAgent)) {
        (function ($) {
            $.fn.offsetOld = $.fn.offset;
            $.fn.offset = function () {
                var result = this.offsetOld();
                result.top -= window.scrollY;
                result.left -= window.scrollX;
                return result;
            };
        })(jQuery);
    }

    // 높이
    var essenceTop = $(".essence").offset().top - 150;
    var logoAnimation = $(".logo-animation-mobile").offset().top - 400;
    var logoBox = $(".logo-action").offset().top;
    $(window).resize(function () {
        essenceTop = $(".essence").offset().top - 150;
        logoAnimation = $(".logo-animation-mobile").offset().top - 600;
        logoBox = $(".logo-action").offset().top;
    });

    var userA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
    if (userA.indexOf("android") > -1) {
        //안드로이드
    }
    if (userA.indexOf("iphone") > -1) {
        //IOS
        var essenceTop = $(".essence").offset().top - 450;
        var logoAnimation = $(".logo-animation-mobile").offset().top - 400;
        $(window).resize(function () {
            essenceTop = $(".essence").offset().top - 450;
            logoAnimation = $(".logo-animation-mobile").offset().top - 400;
        });
    }
    if (userA.indexOf("ipad") > -1 || userA.indexOf("ipod") > -1) {
        var essenceTop = $(".essence").offset().top - 150;
        var logoAnimation = $(".logo-animation-mobile").offset().top - 100;
        logoBox = $(".logo-action").offset().top - 500;
        $(window).resize(function () {
            essenceTop = $(".essence").offset().top - 150;
            logoAnimation = $(".logo-animation-mobile").offset().top - 100;
            logoBox = $(".logo-action").offset().top - 500;
        });
    }

    // 스크롤
    $(window).on("mousewheel DOMMouseScroll touchstart scroll", function (e) {
        var scrollT = $("html").scrollTop() || $("body").scrollTop();

        //   var imgAction = function (ele) {
        // 	var tg = $(`.${ele}`).offset().top - 500;
        // 	if (scrollT > tg) {
        // 	  $(`.${ele}`).css({
        // 		backgroundPositionY: -(scrollT - tg) / 2.5 / 10 + "px",
        // 	  });
        // 	}
        //   };
        //   imgAction("believe-img");
        //   imgAction("mission-img-1");
        //   imgAction("mission-img-2");
        //   imgAction("mission-img-3");

        if (scrollT > essenceTop) {
            for (let i = 0; i < 3; i++) {
                setTimeout(function () {
                    $(".essence-list li").eq(i).addClass("active");
                }, 500 * i);
            }
        }

        if (scrollT > logoAnimation) {
            $(".animation-logo").addClass("active");
        } else {
            $(".animation-logo").removeClass("active");
        }

        // var scrollT = $("html").scrollTop();
        // var logoBoxHeight = $(".logo-action").height();
        // if (scrollT >= logoBox && scrollT < logoBox + logoBoxHeight) {
        // 	$(".logo-contents").addClass('sticky');
        // } else if (scrollT >= logoBox + logoBoxHeight) {
        // 	$(".logo-contents").removeClass('sticky');
        // } else {
        // 	return;
        // }
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
                    $("html, body").css({
                        overflow: "visible"
                    });

                    var scrollT = $("html").scrollTop() || $("body").scrollTop();

                    if (scrollT > essenceTop) {
                        for (let i = 0; i < 3; i++) {
                            setTimeout(function () {
                                $(".essence-list li").eq(i).addClass("active");
                            }, 500 * i);
                        }
                    }
                    if (scrollT > logoAnimation) {
                        $(".animation-logo").addClass("active");
                    } else {
                        $(".animation-logo").removeClass("active");
                    }
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
        return newArray;
    }

    let forSearchFilters = [];
    const filterSearchBtnClickFunc = () => {
        $("li.btn-search.isvisible").click(() => {
            const finalSearchFilters = removeDuplicates(forSearchFilters, "id");
            let filterQuery = "";
            let ffQuery = "ff=";
            let sfQuery = "sf=";
            let tfQuery = "tf=";
            for (let i = 0; i < finalSearchFilters.length; i += 1) {
                if (finalSearchFilters[i].type === "firstfilter") {
                    ffQuery += `${finalSearchFilters[i].id}/`;
                } else if (finalSearchFilters[i].type === "secondfilter") {
                    sfQuery += `${finalSearchFilters[i].id}/`;
                } else if (finalSearchFilters[i].type === "thirdfilter") {
                    tfQuery += `${finalSearchFilters[i].id}/`;
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
            if (tfQuery !== "tf=") {
                tfQuery = tfQuery.substring(0, tfQuery.length - 1);
                filterQuery += "&";
                filterQuery += tfQuery;
            }
            const finalQuery = `?${filterQuery}`;
            window.location.href = `/plants${finalQuery}&term=`;
        });
    };

    setTimeout(function () {
        AOS.init({
                once: true,
                duration: 1000,
            },
            100
        );
    });

    var typer = function () {
        $(".typer").unityping({
            string: ["스투키", "몬스테라", ""],
            number: 1,
            typingSpeed: 500,
            onComplete: function (len) {
                var plusNum = (this.number += 1);
                if (len == plusNum) {
                    setTimeout(function () {
                        $(".search-input-box").addClass("end");
                    }, 500);
                }
            },
        });
    };
    typer();
    /* 타이핑 및 검색 */
    $(".typer").on("keyup", function () {
        $(this).addClass("active");
        var isVal = $(this).val().length;
        $(".btn-link").show();
        textWidth();
        if (isVal > 0) {
            $(".search-input-box").removeClass("end");
            $(".search-input-box").addClass("left");
            $(".search-del-text").addClass("hidden");
            $(".search-del-text-2").hide();
            $(".btn-link").show();
            $(this).attr("placeholder", "");
            // $(this).css('widht','auto')
        } else {
            $(".search-input-box").addClass("end");
            $(".search-input-box").removeClass("left");
            $(".search-del-text").removeClass("hidden");
            $(".search-del-text-2").show();
            $(".btn-link").hide();
            $(this).removeClass("active");
        }
    });

    /* 타영역 클릭시 되돌리기 */
    $(document).on("click", function (e) {
        e.stopPropagation();
        if (!$(e.target).hasClass("search-input") && !$(e.target).hasClass("btn-link")) {
            $(".search-input-box").addClass("end");
            $(".search-input-box").removeClass("left");
            $(".search-del-text").removeClass("hidden");
            $(".search-del-text-2").show();
            $(".btn-link").hide();
            $(".typer").val("").removeClass("active");
        }
    });

    /* 텍스트길이 조정 */
    var textWidth = function (e) {
        var value = $(".typer.active").val();
        $("body").append('<div id="virtual_dom2">' + value + "</div>");
        windowWidth = $(this).width();
        if (windowWidth < 768) {
            var inputWidth = $("#virtual_dom2").width() * 2; // 글자 하나의 대략적인 크기
        } else {
            var inputWidth = $("#virtual_dom2").width() + 10; // 글자 하나의 대략적인 크기
        }

        $(".typer.active").css("width", inputWidth);
        $("#virtual_dom2").remove();
    };

    /* 필터 */
    const stringFilters = $("#StringFilters").text();
    const objectFilters = JSON.parse(stringFilters);
    const filters = objectFilters.filters;
    // const filters = [{
    // 		id: "5fabb88461f93bdd9b20e0d9",
    // 		name: "잎이 있는 식물",
    // 		secondFilters: [{
    // 				id: "5fabcee867917feda4fa2010",
    // 				name: "잎 모양",
    // 				thirdFilters: [{
    // 						id: "5fabd07267917feda4fa201a",
    // 						name: "구멍"
    // 					},
    // 					{
    // 						id: "5fabd07567917feda4fa201b",
    // 						name: "넓은"
    // 					},
    // 					{
    // 						id: "5fabd07967917feda4fa201c",
    // 						name: "뾰족한"
    // 					},
    // 					{
    // 						id: "5fabd07c67917feda4fa201d",
    // 						name: "갈라진"
    // 					},
    // 					{
    // 						id: "5fabd08167917feda4fa201e",
    // 						name: "별모양"
    // 					},
    // 					{
    // 						id: "5fabd08467917feda4fa201f",
    // 						name: "하트모양"
    // 					},
    // 					{
    // 						id: "5fabd08867917feda4fa2020",
    // 						name: "얇은"
    // 					},
    // 					{
    // 						id: "5fabd08c67917feda4fa2021",
    // 						name: "둥근"
    // 					},
    // 					{
    // 						id: "5fabd08f67917feda4fa2022",
    // 						name: "작은"
    // 					},
    // 					{
    // 						id: "5fabd09267917feda4fa2023",
    // 						name: "무늬"
    // 					},
    // 				],
    // 			},
    // 			{
    // 				id: "5fabceeb67917feda4fa2011",
    // 				name: "공기정화",
    // 				thirdFilters: []
    // 			},
    // 			{
    // 				id: "5fabcef467917feda4fa2012",
    // 				name: "반려동물 안전한",
    // 				thirdFilters: [],
    // 			},
    // 			{
    // 				id: "5fabcf1667917feda4fa2013",
    // 				name: "향기 나는",
    // 				thirdFilters: []
    // 			},
    // 			{
    // 				id: "5fabcf1a67917feda4fa2014",
    // 				name: "열매 맺는",
    // 				thirdFilters: []
    // 			},
    // 			{
    // 				id: "5fabcf2067917feda4fa2015",
    // 				name: "빛이 적어도 되는",
    // 				thirdFilters: [],
    // 			},
    // 			{
    // 				id: "5fabcf2667917feda4fa2016",
    // 				name: "꽃 피는",
    // 				thirdFilters: []
    // 			},
    // 		],
    // 	},
    // 	{
    // 		id: "5fabbe87205e2ce27a38dd86",
    // 		name: "공중식물",
    // 		secondFilters: []
    // 	},
    // 	{
    // 		id: "5fabbe91205e2ce27a38dd87",
    // 		name: "넝쿨식물",
    // 		secondFilters: []
    // 	},
    // 	{
    // 		id: "5fabbe9c205e2ce27a38dd88",
    // 		name: "선인장/다육식물",
    // 		secondFilters: [],
    // 	},
    // ];

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
                filterSlide.slideNext();
                $(".select-text").addClass("active");
                $(".select-text").addClass("next");
                $(".select-text span").html(selectText);
            }, 500);
            setTimeout(function () {
                $(".select-text").removeClass("next");
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
        var list = filters[onedepIdx].secondFilters[idx].thirdFilters.length;
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
            filters[onedepIdx].secondFilters[idx].thirdFilters.forEach(function (val) {
                $(".depth-3 .filter-item-box").append(`<li class="filter-item" filtertype="thirdfilter" data=${val.id}>${val.name}</li>`);
            });

            checkLen.forEach(function (value, index) {
                $(".depth-3 .filter-item-box li").eq(value).addClass("active");
            });
            if ($(".btn-search").length === 0) {
                $(`<li class="btn-search"><button type="button">검색</button></li>`).appendTo(".depth-2 .filter-item-box");
            }

            setTimeout(function () {
                filterSlide.slideNext();
                $(".select-text").addClass("active");
                $(".select-text").addClass("next");
                $(".select-text span").html(selectText);
                $(".prefix").html("은");
                $(".default-text").html("어떻게 생겼나요?");
            }, 250);
            setTimeout(function () {
                $(".select-text").removeClass("next");
                $(".depth-2 .filter-item").css("pointer-events", "auto");
            }, 2500);

            $(this).addClass("active");
            setCheckLen = [];
            forSearchFilters.push({
                type: "secondfilter",
                id: $(this).attr("data"),
            });
        } else {
            $(this).toggleClass("active");
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

    $(document).on("click", ".depth-3 .filter-item", function () {
        // 검색 버튼 생성
        var isSearchBtn = $(".depth-3 .btn-search").length;
        if (isSearchBtn == 0) {
            $(`<li class="btn-search"><button type="button">검색</button></li>`).appendTo(".depth-3 .filter-item-box");
        }
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            forSearchFilters.push({
                type: "thirdfilter",
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
        $(".btn-search").addClass("isvisible");
        filterSearchBtnClickFunc();

        var idx = $(this).index();
        makeDisableDate(checkLen, idx);
    });

    function makeDisableDate(disableDay, val) {
        var dateIndex = disableDay.indexOf(val);
        if (dateIndex == -1) {
            disableDay.push(val);
        } else {
            disableDay.splice(dateIndex, 1);
        }
    }

    $(document).on("click", ".depth-3 .active", function () {
        $(this).removeClass("active");
    });

    $(document).on("click", ".depth-2 .btn-prev", function () {
        forSearchFilters = [];
        checkLen = [];
        var selectText = $(".depth-1 .filter-item.active").html();
        filterSlide.slidePrev();

        $(".select-text span").html(selectText);
        $(".select-text").addClass("prev");
        twodepIdx;
        setTimeout(function () {
            $(".select-text").removeClass("prev");
        }, 2500);

        $(".prefix").html("을");
        var itemCheck = $(".depth-2 .filter-item.active").length;
        if (itemCheck <= 0) {
            $(".depth-1 .filter-item.active").removeClass("active");
            $(".select-text").removeClass("active");
            $(".select-text span").html("어떤 식물");
        }
    });

    $(document).on("click", ".depth-3 .btn-prev", function () {
        filterSlide.slidePrev();
        $(".select-text").addClass("prev");
        setTimeout(function () {
            $(".select-text").removeClass("prev");
        }, 2500);

        var oneNum = onedepIdx;
        var oneText = $(".depth-1 .filter-item").eq(oneNum).html();
        if (checkLen.length > 0) {
            $(".depth-2 .filter-item")
                .eq(twodepIdx - 1)
                .append(`<em>${checkLen.length}</em>`);
            $(".select-text span").html(oneText);
            $(".prefix").html("을");
            $(".default-text").html("찾고 있나요?");
        } else {
            $(".depth-2 .filter-item").children("em").remove();
            $(".depth-2 .filter-item")
                .eq(twodepIdx - 1)
                .removeClass("active");
            $(".select-text span").html(oneText);
            $(".prefix").html("을");
            $(".default-text").html("찾고 있나요?");
        }
    });

    $("#fullpage").fullpage({
        anchors: ["search", "filter", "magazine-1", "magazine-2", "info"],
        navigation: true,
        navigationTooltips: ["식물검색", "식물찾기", "매거진", "매거진-하", "플립"],
        navigationPosition: "left",
        responsiveHeight: 330,
        sectionSelector: ".full-page-wrap",
        scrolbar: true,
        onLeave: function (index) {
            $(".full-page-wrap [data-aos]").removeClass("aos-animate");
            console.log("onLeave", index);

            if (index === 1) {
                $(".move-arrow-1").animate({
                        opacity: 0,
                    },
                    250
                );
            }

            /*  원페이지 네비게이션 위치 */
            if ($("#fp-nav ul li:nth-child(4)").children().hasClass("active")) {
                $("#fp-nav ul li:nth-child(3)").children().addClass("active");
            }
            if ($("#fp-nav ul li:nth-child(3)").children().hasClass("active")) {
                $("#fp-nav ul li:nth-child(4)").children().addClass("active");
            }

            if (index === 5) {
                $(window).on("scroll", function (e) {
                    var wt = $("html").scrollTop() || $("body").scrollTop();
                    if (wt <= 50) {
                        $(".over-page").removeClass("active");
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
                    }
                });
                window.addEventListener("touchstart", initTouch);
                window.addEventListener("touchmove", swipeDirection);
            } else {
                $(".over-page").removeClass("active");
            }
        },
        onSlideLeave: function () {
            $(".full-page-wrap [data-aos]").removeClass("aos-animate");
            console.log("onSlideLeave");
        },
        afterSlideLoad: function () {
            $(".full-page-wrap.active [data-aos]").addClass("aos-animate");
            console.log("ASDF");
        },
        afterLoad: function (anchorLink, index) {
            $(".full-page-wrap.active [data-aos]").addClass("aos-animate");

            setTimeout(() => {
                if (index === 1) {
                    $(".move-arrow-1").animate({
                            opacity: 1,
                        },
                        1000
                    );
                }
            }, 500);

            /*  원페이지 네비게이션 위치 */
            if ($("#fp-nav ul li:nth-child(4)").children().hasClass("active")) {
                $("#fp-nav ul li:nth-child(3)").children().addClass("active");
            }
            if ($("#fp-nav ul li:nth-child(3)").children().hasClass("active")) {
                $("#fp-nav ul li:nth-child(4)").children().addClass("active");
            }
            if (index === 5) {
                $(window).on("scroll", function (e) {
                    var wt = $("html").scrollTop() || $("body").scrollTop();
                    if (wt <= 100) {
                        $(".over-page").removeClass("active");
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
                            overflow: "hidden"
                        });
                        $("#fullpage").css({
                            position: "relative"
                        });
                    } else {
                        // 내림
                        console.log("내림");
                        $.fn.fullpage.setMouseWheelScrolling(false);
                        $.fn.fullpage.setKeyboardScrolling(false);
                        $("#fullpage").css({
                            position: "fixed"
                        });
                        $("html, body").css({
                            overflow: "visible"
                        });
                        $(".over-page").addClass("active");
                    }
                });
                window.addEventListener("touchstart", initTouch);
                window.addEventListener("touchmove", swipeDirection);
            } else {
                $(".over-page").removeClass("active");
            }
        },
    });

    var mySwiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 26.4,
        autoplay: {
            delay: 100000000000000,
            disableOnInteraction: false,
        },
        breakpoints: {
            480: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1240: {
                slidesPerView: 6,
                spaceBetween: 42,
            },
            1680: {
                slidesPerView: "auto",
                spaceBetween: 42,
            },
        },
    });
    var visionSlide = new Swiper(".vision-slide", {
        slidesPerView: "auto",
        spaceBetween: 30,
        autoplay: {
            delay: 100000000000000,
            disableOnInteraction: false,
        },
        1680: {
            slidesPerView: "auto",
            spaceBetween: 42,
        },
    });

    var filterSlide = new Swiper(".depth-slide", {
        slidesPerView: 1,
        speed: 1500,
        noSwipingClass: "depth-slide",
    });
});