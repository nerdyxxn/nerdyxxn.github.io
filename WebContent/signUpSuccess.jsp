<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IPU : 회원가입 완료</title>
    <!-- RESET -->
    <link rel="stylesheet" type="text/css" href="css/html5_reset.css">
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/earlyaccess/notosanskr.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/icheck-material.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/common.css" />
    <link rel="stylesheet" type="text/css" href="css/signUpSuccess.css" />
</head>

<body>
    <div id="container">
        <div class="signUpSuc_section">
            <div class="success-wrap p-4 p-md-5">
                <div class="logo">
                    <a href="index.html"><img src="img/logoSizing.png" alt="IPU" /></a>
                </div>
                <div class="success_content">
                    <img src="img/icon/success01.png" class="ico_success">
                    <p class="success_title"><span>${userID}</span>님의 회원가입이 완료되었습니다.</p>
                    <p class="success_text">아퓨 웹 사이트에 회원가입이 정상적으로 처리되었습니다.</p>
                </div>
                <div class="sucBtnItems">
                    <button type="button" id="toMainBtn" class="successBtn form-control rounded submit px-3"
                        onclick="location.href='index.jsp'">홈으로</button>
                    <button type="button" id="toLoginBtn" class="successBtn form-control rounded submit px-3"
                        onclick="location.href='login.jsp'">로그인</button>
                </div>
<!--                 <div class="sucBtnItemsTmp">
                    <a href="main.html" id="toProductBtn">제품등록하기</a>
                </div> -->
            </div>
        </div>
    </div>
    <!-- JS -->
    <script src="js/jquery.min.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>