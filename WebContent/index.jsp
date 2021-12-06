<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IPU ::</title>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<!-- Bootstrap -->
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
	crossorigin="anonymous">
	
</script>
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
	crossorigin="anonymous">
	
</script>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
	crossorigin="anonymous">
<!-- RESET -->
<link rel="stylesheet" type="text/css" href="css/html5_reset.css">
<!-- CSS -->
<link rel="stylesheet" type="text/css" href="css/common_main.css" />
<link rel="stylesheet" href="fonts/icomoon/style.css">
<link rel="stylesheet" href="css/owl.carousel.min.css">
<link rel="stylesheet" href="css/slide.css">
<link rel="stylesheet" type="text/css" href="css/index.css" />
<link
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
	rel="stylesheet">
<!-- JS -->
<script src="js/popper.min.js"></script>
<script src="js/main.js"></script>
</head>

<body>
	<!-- Header Navbar START -->
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="navbar-content">
			<!-- 메뉴의 홈페이지 이름 -->
			<a class="navbar-brand" href="index.jsp">IPU</a>
			<!-- 모바일때 표시되는 메뉴 버튼(PC 버젼에서는 보이지 않는다.)  -->
			<button class="navbar-toggler js-menu-toggle" type="button"
				data-toggle="collapse" data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<!-- 메인 메뉴 아이템 -->
			<div class="collapse navbar-collapse" id="navbarSlide">
				<ul class="navbar-nav mr-auto">
					<!-- Home 메뉴 -->
					<li class="nav-item active"><a class="nav-link"
						href="userSettings.html">사용자설정</a></li>
					<!-- Link 메뉴 -->
					<li class="nav-item"><a class="nav-link" href="dataIpu.html">기록관리</a>
					</li>
					<!-- Dropdown 메뉴 -->
					<li class="nav-item dropdown"><a
						class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
						role="button" data-toggle="dropdown" aria-haspopup="true"
						aria-expanded="false"> 고객센터 </a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a class="dropdown-item" href="csCenter.html">CS Center</a> <a
								class="dropdown-item" href="#">Another #2</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="#">Another #3</a>
						</div></li>
				</ul>
			</div>
		</div>
	</nav>
	<!-- // Header Navbar END -->

	<!-- 슬라이드 메뉴바 START -->
	<aside class="sidebar">
		<div class="side-inner">
			<div class="slideLogo">
				<a href="index.jsp"><img src="img/logoSizing.png" alt="IPU" /></a>
			</div>
			<ul class="sidebar-list">
				<li class="sidebar-item"><a href="userSettings.html"
					class="sidebar-anchor">사용자 설정</a></li>
				<li class="sidebar-item"><a href="dataIpu.html"
					class="sidebar-anchor">기록관리</a></li>
				<li class="sidebar-item"><a href="csCenter.html"
					class="sidebar-anchor">고객센터</a></li>
			</ul>
		</div>
	</aside>
	<!-- //슬라이드 메뉴바 END -->

	<!-- 본문 컨테이너 START -->
	<div id="contaniner">
		<div class="blank_top"></div>
		<div id="ipuPop">
			<div class="ipuPop_title">
				<p>NEW! 아퓨 제품 출시</p>
				<p>호신용품계의 샤*, 루이비*. 지금 만나보세요!</p>
			</div>
			<div class="ipuPop_img">
				<img src="img/main_pop_01.png">
			</div>
			<a href="javascript:closePop();" class="ipuPopClose"><img
				src="img/main_pop_02.png"></a>
		</div>
		<div class="main_section01">
			<div class="section01_content">
				<div class="section01_title">
					<p>
						뒤에서 누군가 <span>따라올까봐 걱정이라면?</span>
					</p>
					<p>아퓨를 사용해보세요!</p>
				</div>
				<div class="section01_subtitle">
					<p>낮에는 물론 저녁에도</p>
					<p>IR카메라로 어두운 촬영도 가능해요.</p>
				</div>
				<button class="btn" id="useIpuBtn" onclick="location.href='login.jsp'">아퓨 사용하기</button>
			</div>
			<div class="section01_img">
				<img src="img/main_section01_01.png">
			</div>
		</div>
		<div class="main_section02">
			<div class="section02_title">
				<p>불안한 순간,</p>
				<p>모두를 안심시켜드릴게요.</p>
			</div>
			<div class="section02_img">
				<div class="section02_img01">
					<p class="section02_img_title">아퓨 부착</p>
					<p>
						<span class="section02_pointTxt">클립 또는 자석</span>이 있어
					</p>
					<p>사용자의 가방 끈에 탈부착 가능!</p>
				</div>
				<div class="section02_img02">
					<p class="section02_img_title">사용자</p>
					<p>후방의 위험인물로부터 보호하기 위해</p>
					<p>
						<span class="section02_pointTxt">센서와 IR카메라</span> 탑재!
					</p>
				</div>
				<div class="section02_img03">
					<p class="section02_img_title">보호자</p>
					<p>
						아퓨 앱으로 보호자는<span class="section02_pointTxt"> 사용자의 위치</span>
					</p>
					<p>
						혹은 <span class="section02_pointTxt">실시간 영상을 확인</span>할 수 있어요.
					</p>
				</div>
			</div>
		</div>
		<div class="main_section03">
			<div class="section03_title">
				<p>
					사랑하는 이에게 <span>안전을 선물해보세요.</span>
				</p>
			</div>
			<div class="section03_subtitle">
				<p>오늘도 안전한 하루를 보낸 당신에게</p>
			</div>
			<button class="btn" id="buyIpuBtn">구매하기</button>
			<div class="section03_img">
				<img src="img/main_section03_01.png">
			</div>
		</div>
		<div class="main_section04">
			<div class="section04_title">
				<p>안전한 세상을 위해 움직입니다.</p>
			</div>
			<div class="section04_subtitle">
				<p>PADIEM</p>
			</div>
			<button class="btn" id="shareIpuBtn" onclick="sendLinkCustom();" value="Custom">
				<i class="fas fa-external-link-alt"></i>공유하기
			</button>
		</div>
		<div class="blank_section"></div>
		<div id="main_section05">
			<a href="signUp.jsp" class="mainBtn">회원가입</a> <a href="login.jsp"
				class="mainBtn">로그인</a>
		</div>
	</div>
	<!-- // 본문 컨테이너 END -->
</body>
<!-- kakaoMAP API - 위치 이동 금지 -->
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
<script>
	Kakao.init('34c44a1aa6752f5cfbf2e8ac447c3c4d');

	function sendLinkCustom() {
		Kakao.Link.sendCustom({
			templateId : 66461
		});
	}
</script>
</html>