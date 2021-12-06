<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IPU : 회원가입</title>
    <!-- RESET -->
    <link rel="stylesheet" type="text/css" href="css/html5_reset.css">
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/earlyaccess/notosanskr.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/icheck-material.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/common.css" />
    <link rel="stylesheet" type="text/css" href="css/signUp.css" />
        <!-- JS -->
    <script src="js/jquery.min.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
</head>

<body>
    <div id="container">
        <div class="signUp_section row">
            <div class="login-wrap p-4 p-md-5">
                <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-edit"></span>
                </div>
                <!-- <h3 class="text-center">Create Your Account</h3> -->
                <form action="SignUp.do" method="post" class="signup-form" id="signUp_form">
                    <div class="form-group mb-3">
                        <label class="label" for="id">아이디</label>
                        <div class="chkId-container">
                        	<input id="inputUserID" type="text" class="form-control" name="userID" placeholder="padiem1209" required>
                        	<button type="button" id="checkIdBtn" class="btn btn-primary" idcheck="">중복확인</button>
                    	</div>
                    </div>
                    <div class="form-group mb-3">
                        <label class="label" for="password">비밀번호</label>
                        <input id="password-field" type="password" name="userPassword" class="form-control" placeholder="Password" required>
                        <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                    </div>
                    <div class="form-group mb-3">
                        <label class="label" for="password">비밀번호 확인</label>
                        <input id="password-field-chk" type="password" class="form-control" placeholder="Password" required>
                        <span toggle="#password-field-chk" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                    </div>
                    <div class="form-group mb-3">
                        <label class="label" for="name">이름</label>
                        <input id="inputUserName"  type="text" class="form-control" name="userName" placeholder="파디엠" required>
                    </div>
                    <div class="form-group mb-3">
                        <label class="label" for="email">이메일</label>
                        <input id="inputUserEmail" type="text" class="form-control" name="userEmail" placeholder="ipu@padiem.net" required>
                    </div>
                    <div class="form-group mb-3">
                        <label class="label" for="birthday">생년월일</label>
                        <div class="birthdayInput">
                            <input type="text" id="inputUserFirstRegnum" class="form-control" name="userFirstRegnum" placeholder="921126" required><span>-</span>
                            <input type="text" id="inputUserLastRegnum" class="form-control" name="userLastRegnum" placeholder="2" maxlength="1" required><span>******</span>
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label class="label" for="phone">휴대폰번호</label>
                        <input id="inputUserPhone" type="text" class="form-control" name="userPhone" placeholder="010-1111-2222" required>
                        <!-- <button type="button" id="testPhone" class="btn btn-primary" onclick="testInit()"></button> -->
                    </div>
                    <div class="form-group">
                        <button type="button" id="signUpBtn" class="form-control rounded submit px-3">Sign Up</button>
                    </div>
                </form>
                <p>I'm already a member! <a href="login.jsp" class="toSignIn">Sign In</a></p>
                <div class="indexSocial">
                    <a href="signUp.jsp" class="indexSocialBtn" id="socialKakaoBtn"><img src="img/icon/ico_kakao45.png">
                        <p>카카오 아이디로<br> 회원가입</p>
                    </a>
                    <a href="signUp.jsp" class="indexSocialBtn" id="socialNaverBtn"><img src="img/icon/ico_naver45.png">
                        <p>네이버 아이디로<br> 회원가입</p>
                    </a>
                    <a href="signUp.jsp" class="indexSocialBtn" id="socialGoogleBtn"><img
                            src="img/icon/ico_google45.png">
                        <p>구글 아이디로<br> 회원가입</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <script>
    	// 유효성 검사식
			var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
    		var getCheck= RegExp(/^[A-Za-z]{1}[a-zA-Z0-9]{3,15}$/);
    		var getName= RegExp(/^[가-힣]+$/);
    		var getRegCheck= RegExp(/([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/);
    		var getRegLastCheck= RegExp(/(^[2]{1}$)/);
    		var getRegPhone = RegExp(/^\d{3}-\d{3,4}-\d{4}$/);
    		
    		
        // 회원가입 버튼 클릭		
        $('#signUpBtn').click(function () {
            var valId = $('#inputUserID').val();
    		var valPass = $('#password-field').val();
    		var valCPass = $('#password-field-chk').val();
            var valName = $('#inputUserName').val();
    		var valEmail = $('#inputUserEmail').val();
    		var valPhone = $('#inputUserPhone').val();
    		var valFregnum = $("#inputUserFirstRegnum").val();
    		var valLregnum = $("#inputUserLastRegnum").val();
    		
    		var idCheck = $('#checkIdBtn').attr('idcheck');
          	
        	
            if (valId == "" || valId == null || valId == undefined) {
                alert("아이디를 입력해주세요.");
                $('#inputUserID').focus();
                return false;
            }
            
            if (idCheck == "" || idCheck == "N") {
                alert('아이디 중복확인을 해주세요.');
                $('#inputUserID').focus();
                return false;
            }
            if (!getCheck.test(valId)) {
                alert("아이디를 영문 대소문자, 숫자를 혼합하여 4자 이상 12자 이하로 입력해주세요.");
                $("#inputUserID").val("");
                $("#inputUserID").focus();
                return false;
            }
            if (valPass == null || valPass == undefined || valPass == "") {
                alert('비밀번호는 영문 소문자, 숫자, 특수문자를 혼합하여 8자 이상 20자 이하로 입력해주세요.');
                $('#password-field').focus();
                return false;
            }
            if (valCPass == null || valCPass == undefined || valCPass == "") {
                alert('비밀번호 확인을 입력해주세요.');
                $('#password-field-chk').focus();
                return false;
            }
            if (valPass != valCPass) {
                alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
                $('#password-field').val("");
                $('#password-field-chk').val("");
                $('#password-field').focus();
                return false;
            }
            if (valName == null || valName == undefined || valName == "") {
                alert('이름을 입력해주세요.');
                $('#inputUserName').focus();
                return false;
            }
            if (valEmail == null || valEmail == undefined || valEmail == "") {
                alert('이메일을 입력해주세요.');
                $('#inputUserEmail').focus();
                return false;
            }
            if (!getMail.test(valEmail)) {
                alert("이메일을 형식에 맞게 입력해주세요.");
                $("#inputUserEmail").val("");
                $("#inputUserEmail").focus();
                return false;
            }
            if (valFregnum == null || valFregnum == "" || valLregnum == null || valLregnum == "") {
                alert('생년월일을 입력해주세요.');
                $('#inputUserFirstRegnum').focus();
                return false;
            }
            if (!getRegCheck.test(valFregnum) || !getRegLastCheck.test(valLregnum)) {
                alert("생년월일을 형식에 맞게 입력해주세요.");
                $("#inputUserFirstRegnum").val("");
                $("#inputUserLastRegnum").val("");
                $("#inputUserFirstRegnum").focus();
                return false;
            }
            if (!getRegPhone.test(valPhone)) {
                alert('휴대폰 번호를 010-1234-5678 형태로 입력해주세요.');
                $("#inputUserPhone").val("");
                $('#inputUserPhone').focus();
                return false;
            }
            
            $('#signUp_form').submit();
        });


        // 아이디 중복체크    
        $("#checkIdBtn").click(function () {
            console.log($("#inputUserID").val());
            if ($("#inputUserID").val() == "") {
                alert("아이디를 입력해주세요.");
                $('#inputUserID').focus();
                return false;
            }

            if (!getCheck.test($("#inputUserID").val())) {
                alert("아이디를 영문 대소문자, 숫자를 혼합하여 4자 이상 12자 이하로 입력해주세요.");
                $("#inputUserID").val("");
                $("#inputUserID").focus();
                return false;
            }

            $.ajax({
                url: "UserCheckId.do",
                data: {
                    idRegister: $("#inputUserID").val()
                },
                success: function (res1) {
                    console.log(res1);
                    if (res1 == 'NO') {
                        $("#inputUserID").val("");
                        $('#checkIdBtn').attr('idCheck','N');
                        alert("이미 존재하는 아이디입니다.");
                    } else if (res1 == 'YES') {
                        $('#password-field').focus();
                        $('#checkIdBtn').attr('idCheck','Y');
                        alert("가입 가능한 아이디입니다.");
                    }
                }
            });
        });

        // 비밀번호 유효성 검사 체크
        $("#password-field").change(function () {
            var pw = $("#password-field").val();
            var num = pw.search(/[0-9]/g);
            var eng = pw.search(/[a-z]/ig);
            var spe = pw.search(/[`~!@@#$%^&*]/gi);

            if (pw.length < 8 || pw.length > 20) {
                alert("비밀번호는 영문 소문자, 숫자, 특수문자를 혼합하여 8자 이상 20자 이하로 입력해주세요.");
                $("#password-field").val("");
                $('#password-field').focus();
                return false;
            } else if (pw.search(/\s/) != -1) {
                alert("비밀번호는 공백 없이 입력해주세요.");
                $("#password-field").val("");
                $('#password-field').focus();
                return false;
            } else if (num < 0 || eng < 0 || spe < 0) {
                alert("영문 소문자, 숫자, 특수문자를 혼합하여 입력해주세요.");
                $("#password-field").val("");
                $('#password-field').focus();
                return false;
            } else {
                console.log("PWD : 유효성 OK");
                return true;
            }
        });

        $("#password-field-chk").change(function () {
            var pw = $("#password-field").val();
            var pwchk = $("#password-field-chk").val();

            if (pw != pwchk) {
                alert("비밀번호가 일치하지 않습니다.");
                $("#password-field-chk").val("");
                $('#password-field-chk').focus();
            } else {
                console.log("PWD-CHK : 일치");
            }
        });
    </script>
</body>
</html>