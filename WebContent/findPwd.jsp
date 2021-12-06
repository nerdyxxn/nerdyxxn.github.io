<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IPU : 비밀번호 찾기</title>
<!-- RESET -->
<link rel="stylesheet" type="text/css" href="css/html5_reset.css">
<!-- CSS -->
<link rel="stylesheet" type="text/css"
	href="https://fonts.googleapis.com/earlyaccess/notosanskr.css">
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="css/icheck-material.css">
<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" type="text/css" href="css/common.css" />
<link rel="stylesheet" type="text/css" href="css/findPwd.css" />
<!-- JS -->
<script src="js/jquery.min.js"></script>
<script src="js/popper.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/main.js"></script>
</head>

<body>
	<div id="container">
		<div class="find_section row">
			<div class="find-wrap p-4 p-md-5">
				<div class="find-title">
					<h4 class="text-center">비밀번호 찾기</h4>
					<p>비밀번호는 이름, 가입한 아이디, 이메일을 통해 찾을 수 있습니다.</p>
				</div>
				<form action="FindPwd.do" method="post" class="signup-form" id="findPwd_form">
				    <div class="form-group mb-3">
                        <label class="label" for="id">아이디</label>
                        <input id="inputUserID" type="text" class="form-control" name="userID" placeholder="padiem1209" required>
                    </div>
                    <div class="form-group mb-3">
                        <label class="label" for="name">이름</label>
                        <input id="inputUserName"  type="text" class="form-control" name="userName" placeholder="파디엠" required>
                    </div>
					<div class="form-group mb-3">
						<label class="label" for="userEmail">이메일</label>
						<input id="findUserEmail" type="text" class="form-control"
							name="userEmail" placeholder="ipu@padiem.net" required>
					</div>
					<div class="form-group">
						<button type="submit" id="findPwdBtn"
							class="form-control rounded submit px-3">찾기</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<script>
		
	</script>
</body>
</html>