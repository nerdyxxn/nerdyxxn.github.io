package ipu.user.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import ipu.user.service.UserService;

/**
 * Servlet implementation class UserCheckId
 */
@WebServlet("/UserCheckId.do")
public class UserCheckId extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserCheckId() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html; charset=UTF-8");
		request.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		
		String userID = request.getParameter("idRegister");	
		UserService uService = new UserService();
		int result = uService.joinIdCheck(userID);
		
		// 아이디 유효성 체크 추가 필요 - 현재는 DB 중복 확인만 가능
		if (result == 2) {
			out.print("YES");
			System.out.println("UserCheckIdServlet : 사용 가능한 아이디입니다.");
		} else if (result == 1) {
			out.print("NO");
			System.out.println("UserCheckIdServlet : 사용 불가능한 아이디입니다.");
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
