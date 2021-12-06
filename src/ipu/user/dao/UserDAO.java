package ipu.user.dao;

import static ipu.common.dbcp.DBCPConnection.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import ipu.user.vo.User;

public class UserDAO {
	private PreparedStatement pstmt;
	private ResultSet rs;

	// 로그인 기능
	public int login(Connection conn, String userID, String userPassword) {
		String SQL = "SELECT userPassword FROM USER WHERE userID = ?";
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, userID);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				if (rs.getString(1).equals(userPassword)) {
					return 1; // 로그인 성공
				} else {
					return 0; // 비밀번호 불일치
				}
			}
			return -1; // 아이디가 없다
		} catch (Exception e) {
			e.printStackTrace();
		}
		return -2; // 데이터베이스 오류
	}

	// 아이디 중복체크
	public int joinIdCheck(Connection conn, String userID) {
		String sql = "select * from USER where userID=?";
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, userID);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				return 1; // 1이면 중복된 아이디
			} else {
				return 2; // 2이면 사용가능한 아이디
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(rs);
			close(pstmt);
		}
		return 0;
	}

	// 회원 가입
	public int join(Connection conn, String userID, String userPassword, String userName, String userEmail,
			String userFirstRegnum, String userLastRegnum, String userPhone) {
		String SQL = "INSERT INTO USER VALUES (?, ?, ?, ?, ?, ?, ?)";
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, userID);
			pstmt.setString(2, userPassword);
			pstmt.setString(3, userName);
			pstmt.setString(4, userEmail);
			pstmt.setString(5, userFirstRegnum);
			pstmt.setString(6, userLastRegnum);
			pstmt.setString(7, userPhone);
			return pstmt.executeUpdate();

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("UserDAO : SQL INSERT 오류");
		} finally {
			close(pstmt);
		}
		return -1; // 데이터베이스 오류
	}

	// 로그인된 회원의 vo정보를 담는 메소드
	public User selectUserVO(Connection conn, String userID) {
		User vo = new User();
		String sql = "select * from user where userID=?";
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, userID);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				vo.setUserID(rs.getString("userID"));
				vo.setUserPassword(rs.getString("userPassword"));
				vo.setUserName(rs.getString("userName"));
				vo.setUserEmail(rs.getString("userEmail"));
				vo.setUserFirstRegnum(rs.getString("userFirstRegnum"));
				vo.setUserLastRegnum(rs.getString("userLastRegnum"));
				vo.setUserPhone(rs.getString("userPhone"));
			} else {
				System.out.println("IPUTEST DB에서 " + userID + "회원의 정보를 찾지 못했음");
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}
		close(rs);
		close(pstmt);
		return vo;
	}

	// 아이디 찾기
	public String findId(Connection conn, String userName, String userEmail) {
		String id = null;
		try {
			String sql = "select userID from user where userName=? and userEmail=?";
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, userName);
			pstmt.setString(2, userEmail);
			rs = pstmt.executeQuery();
			if (rs.next())
				id = rs.getString("userID");
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return id;
	}

	// 비밀번호 찾기
	public String findPwd(Connection conn, String userID, String userName, String userEmail) {
		String pwd = null;
		try {
			String sql = "select userPassword from user where userID=? and userName=? and userEmail=?";
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, userID);
			pstmt.setString(2, userName);
			pstmt.setString(3, userEmail);
			rs = pstmt.executeQuery();
			if (rs.next())
				pwd = rs.getString("userPassword");
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return pwd;
	}
}
