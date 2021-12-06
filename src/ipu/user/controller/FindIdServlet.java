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
 * Servlet implementation class findIdServlet
 */
@WebServlet("/FindId.do")
public class FindIdServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FindIdServlet() {
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
		response.setContentType("text/html; charset=UTF-8");
		request.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		
		String userName = request.getParameter("userName");
		String userEmail = request.getParameter("userEmail");
		
		UserService uService = new UserService();
		String userID = uService.findId(userName, userEmail);
		
		if (userID == null) {
		    out.println("<script>");
		    out.println("alert('아이디를 찾을 수 없습니다.');");  
		    out.println("history.back()");
		    out.println("</script>");
		    out.flush();
		} else {
			System.out.println("======= FindIdServlet : DB에서 찾은 아이디는 " + userID);
			request.getSession().setAttribute("userID", userID);
			request.getRequestDispatcher("/findIdSucs.jsp").forward(request, response);
		}
	}

}
