$(function () {
	'use strict';

	// 사이드바 open-close 이벤트
	$('.js-menu-toggle').click(function (e) {

		var $this = $(this);

		if ($('body').hasClass('show-sidebar')) {
			$('body').removeClass('show-sidebar');
			$this.removeClass('active');
		} else {
			$('body').addClass('show-sidebar');
			$this.addClass('active');
		}

		e.preventDefault();
	});

	// click outisde offcanvas
	$(document).mouseup(function (e) {
		var container = $(".sidebar");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			if ($('body').hasClass('show-sidebar')) {
				$('body').removeClass('show-sidebar');
				$('body').find('.js-menu-toggle').removeClass('active');
			}
		}
	});


	// password toggle
	$(".toggle-password").click(function () {

		$(this).toggleClass("fa-eye fa-eye-slash");
		var input = $($(this).attr("toggle"));
		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});

	// 만 14세 이상 체크된 경우에는 modal창 오픈하지 않고 checkForm() 함수 실행하도록
	// $("#signUpBtn").click(function () {
	// 	const form = document.getElementById('chk-form');

	// 	//$('#checkAge').is(':checked') === true
	// 	if (document.getElementById("checkAge").checked) {
	// 		form.action = "signUp.html";
	// 		form.submit();
	// 		alert('if문 통과');
	// 	} else {
	// 		$("#exampleModalCenter").show();
	// 		alert('else문 통과');
	// 	}
	// });


	// 이용약관 checkbox toggle
	const policyBtn = document.getElementById('policyBtn');

	function checkSelectAll() {
		// 전체 체크박스
		const checkboxes = document.querySelectorAll('input[name="ckagree"]');
		// 선택된 체크박스
		const checked = document.querySelectorAll('input[name="ckagree"]:checked');
		// select all 체크박스
		const selectAll = document.querySelector('input[name="selectall"]');

		if (checkboxes.length === checked.length) {
			selectAll.checked = true;
			policyBtn.style.pointerEvents = "auto";
			policyBtn.style.background = "linear-gradient(0.25turn, #c0defb, #c1cdf8, #c1b2fb, #b8aaed, #de93d1)";
		} else {
			selectAll.checked = false;
			policyBtn.style.pointerEvents = "none";
			policyBtn.style.background = "#ddd";
		}

	}

	function selectAll(selectAll) {
		const checkboxes = document.getElementsByName('ckagree');

		checkboxes.forEach((checkbox) => {
			checkbox.checked = selectAll.checked
		})

		if (selectAll.checked == true) {
			policyBtn.style.pointerEvents = "auto";
			policyBtn.style.background = "linear-gradient(0.25turn, #c0defb, #c1cdf8, #c1b2fb, #b8aaed, #de93d1)";
		} else {
			policyBtn.style.pointerEvents = "none";
			policyBtn.style.background = "#ddd";
		}
	}


	// 이용약관 Form 데이터 이동
	function checkForm() {
		//document.getElementById('form_id').action = "~~";
		//document.forms[0].action = "~~";
		const form = document.getElementById('chk-form');

		form.action = "signUp.html";
		form.submit();
	}


	//메인 페이지 팝업 close 이벤트
	function closePop() {
		const ipuPop = document.getElementById('ipuPop');
		ipuPop.style.display = "none";
	}

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