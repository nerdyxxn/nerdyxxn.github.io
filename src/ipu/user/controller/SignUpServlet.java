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
 * Servlet implementation class SignUpServlet
 */
@WebServlet("/SignUp.do")
public class SignUpServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SignUpServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html; charset=UTF-8");
		request.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		
		String userID = request.getParameter("userID");
		String userPassword = request.getParameter("userPassword");
		String userName = request.getParameter("userName");
		String userEmail = request.getParameter("userEmail");
		String userFirstRegnum = request.getParameter("userFirstRegnum");
		String userLastRegnum = request.getParameter("userLastRegnum");
		String userPhone = request.getParameter("userPhone");
		
		UserService uService = new UserService();
		int result = 0;
		result = uService.join(userID, userPassword, userName, userEmail, userFirstRegnum, userLastRegnum, userPhone);
		
		if (result == 1) {	// 성공
			System.out.println("======= SignUpServlet : " + userID + " 회원가입 성공");
			request.getSession().setAttribute("userID", userID);
			request.getRequestDispatcher("/signUpSuccess.jsp").forward(request, response);
		} else {
			System.out.println("======= SignUpServlet : " + userID + " 회원가입 실패");	
		    out.println("<script>");
		    out.println("alert('회원가입에 실패했습니다.');");  
		    out.println("history.back()");
		    out.println("</script>");
		    out.flush();
		}
		
		out.flush();
		out.close();
	}

}
