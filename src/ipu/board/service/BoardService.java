package ipu.board.service;

import static ipu.common.dbcp.DBCPConnection.*;
import ipu.common.dbcp.DBCPConnection;

import java.sql.Connection;
import java.util.ArrayList;

import ipu.board.dao.BoardDAO;
import ipu.board.vo.Board;

public class BoardService {

	// 게시글 리스트 출력 (최신순)
	public ArrayList<Board> getlist(int pageNumber) {
		Connection conn = DBCPConnection.getConnection();
		ArrayList<Board> list = new ArrayList<Board>();
		try {
			BoardDAO dao = new BoardDAO();
			list = dao.getlist(pageNumber);
			close(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	// 하나의 게시글 내용을 불러오는 함수
	public Board getBbs(int bbsID) {
		Connection conn = DBCPConnection.getConnection();
		Board bbs = null;
		try {
			BoardDAO dao = new BoardDAO();
			bbs = dao.getBbs(bbsID);
			close(conn);
		} catch (Exception e) {
			e.printStackTrace();
		} 
		return bbs;
	}
	
	// INSERT - 게시글 작성하는 함수
	public int write(String bbsTitle, String userID, String bbsContent) {
		Connection conn = DBCPConnection.getConnection();
		int result = 0;
		try {
			BoardDAO dao = new BoardDAO();
			result = dao.write(bbsTitle, userID, bbsContent);
			close(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	// 게시물 하나를 수정하는 함수
	public int update(int bbsID, String bbsTitle, String bbsContent) {
		Connection conn = DBCPConnection.getConnection();
		int result = 0;
		try {
			BoardDAO dao = new BoardDAO();
			result = dao.update(bbsID, bbsTitle, bbsContent);
			close(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	// 게시물 하나를 삭제하는 함수
	public int delete(int bbsID) {
		Connection conn = DBCPConnection.getConnection();
		int result = 0;
		try {
			BoardDAO dao = new BoardDAO();
			result = dao.delete(bbsID);
			close(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
}
