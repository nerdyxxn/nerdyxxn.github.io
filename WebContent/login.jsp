<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
	String ctxPath = request.getContextPath();
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IPU : 로그인</title>
<!-- RESET -->
<link rel="stylesheet" type="text/css" href="css/html5_reset.css">
<!-- CSS -->
<link rel="stylesheet" type="text/css"
	href="https://fonts.googleapis.com/earlyaccess/notosanskr.css">
<link rel="stylesheet" type="text/css" href="css/common.css" />
<link rel="stylesheet" type="text/css" href="css/login.css" />
<!-- JS -->
<!-- <script type="text/javascript" src="js/index.js"></script> -->
</head>

<body>
	<div id="container">
		<div class="index_section">
			<div class="logo">
				<a href="index.html"><img src="img/logo.png" alt="IPU" /></a>
			</div>
			<div class="indexInput">
				<form action="Login.do" method="post">
					<div class="field">
						<p>ID</p>
						<input type="text" name="userID" required>
						<label>아이디를 입력하세요</label>
					</div>
					<div class="field">
						<p>PW</p>
						<input type="password" name="userPassword" required autocomplete="off">
						<label>비밀번호를 입력하세요</label>
					</div>
					<button id="buttonLogin" type="submit" class="btn btn-primary btn-lg">
						<p class="login_text">LOGIN</p>
					</button>
				</form>
			</div>
			<div class="indexPwId">
				<a href="findId.jsp">아이디 찾기&nbsp;&nbsp;&nbsp;|</a> <a href="findPwd.jsp">&nbsp;&nbsp;&nbsp;비밀번호
					찾기&nbsp;&nbsp;&nbsp;|</a> <a href="create_account.html">&nbsp;&nbsp;&nbsp;회원가입</a>
			</div>
			<div class="indexSocial">
				<a href="userHome.html" class="indexSocialBtn" id="socialLoginKakao"><img
					src="img/icon/ico_kakao45.png"> <!-- <p>카카오 아이디로<br> 로그인</p> -->
				</a> <a href="userHome.html" class="indexSocialBtn"
					id="socialLoginNaver"><img src="img/icon/ico_naver45.png">
					<!-- <p>네이버 아이디로<br> 로그인</p> --> </a> <a href="userHome.jsp"
					class="indexSocialBtn" id="socialLoginGoogle"><img
					src="img/icon/ico_google45.png"> <!-- <p>구글 아이디로<br> 로그인</p> -->
				</a>
			</div>
		</div>
	</div>
</body>
</html>