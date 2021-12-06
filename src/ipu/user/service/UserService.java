package ipu.user.service;

import static ipu.common.dbcp.DBCPConnection.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import ipu.user.vo.User;
import ipu.user.dao.UserDAO;

public class UserService {

	// 로그인 메소드
	public int login(String userID, String userPassword) {
		int result = 0;
		try {
			Connection conn = getConnection();
			UserDAO dao = new UserDAO();
			result = dao.login(conn, userID, userPassword);
			close(conn);
			if (result == 1) {
				System.out.println("Service - 로그인 성공");
			} else if (result == 0) {
				System.out.println("Service - 비밀번호 불일치");
			} else if (result == -1) {
				System.out.println("Service - 아이디 없음");				
			}
		} catch (Exception e) {
			System.out.println("Service - 오류발생 return 3");
			return 3;
		}
		return result;
	}

	// 아이디 중복체크 (회원가입 할때 사용)
	public int joinIdCheck(String userID) {
		int result = 0;
		try {
			Connection conn = getConnection();
			UserDAO dao = new UserDAO();
			result = dao.joinIdCheck(conn, userID);
			close(conn);
		} catch (Exception e) {
			e.printStackTrace();
			return 3; // 오류 발생
		}
		return result;
	}

	// 회원 가입
	public int join(String userID, String userPassword, String userName, String userEmail, String userFirstRegnum, String userLastRegnum, String userPhone) {
		int result = 0;
		try {
			Connection conn = getConnection();
			UserDAO dao = new UserDAO();
			result = dao.join(conn, userID, userPassword, userName, userEmail, userFirstRegnum, userLastRegnum, userPhone);
			close(conn);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("회원가입 insert 오류");
			return 3; // 오류 발생
		}
		return result;
	}

	// 로그인된 회원의 vo정보를 담는 메소드
	public User selectUserVO(String user_id) {
		User vo = null;
		Connection conn = getConnection();
		UserDAO dao = new UserDAO();
		try {
			vo = dao.selectUserVO(conn, user_id);
		}catch(Exception e){
			e.printStackTrace();
		}
		close(conn);
		return vo;
	}
	
	// 아이디 찾기
	public String findId(String userName, String userEmail) {
		String id = null;
		try {
			Connection conn = getConnection();
			UserDAO dao = new UserDAO();
			id = dao.findId(conn, userName, userEmail);
			close(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return id;
	}
	
	// 비밀번호 찾기
	public String findPwd(String userID, String userName, String userEmail) {
		String pwd = null;
		try {
			Connection conn = getConnection();
			UserDAO dao = new UserDAO();
			pwd = dao.findPwd(conn, userID, userName, userEmail);
			close(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return pwd;
	}

}
