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
 * Servlet implementation class LoginServlet
 */
@WebServlet("/Login.do")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html; charset=UTF-8");
		request.setCharacterEncoding("UTF-8");
		
		PrintWriter out = response.getWriter();
		String userID = request.getParameter("userID");
		String userPwd = request.getParameter("userPassword");
		
		UserService userService = new UserService(); //먼저 clientService 호출
		int result = userService.login(userID, userPwd);
		
		if(result == 1) { // 가지고온 아이디와 패스워드를 UserVO에 저장된 정보들과 대조
			request.getSession().setAttribute("userID", userID); // 이제 받아온 userID를 userID로 지칭하고 세션에 담기
			System.out.println("***************** IPU 사용자 로그인 성공 *****************");
			
			request.getRequestDispatcher("/userHome.jsp").forward(request, response);
			
		} else if (result == 0) {
			System.out.println("======= Servlet - IPU 사용자 로그인 실패 2 (비밀번호 틀림)");
		    out.println("<script>");
		    out.println("alert('비밀번호가 맞지 않습니다.');");  
		    out.println("history.back()");
		    out.println("</script>");
		    out.flush();
		} else if (result == -1) {
			System.out.println("======= Servlet - IPU 사용자 로그인 실패 2 (아이디 없음)");
		    out.println("<script>");
		    out.println("alert('존재하지 않는 아이디입니다.');");  
		    out.println("history.back()");
		    out.println("</script>");
		    out.flush();
		} else if (result == -2) {
			System.out.println("======= Servlet - IPU 사용자 로그인 실패 3 (데이터베이스 오류)");
		    out.println("<script>");
		    out.println("alert('데이터베이스 오류가 발생했습니다.');");  
		    out.println("history.back()");
		    out.println("</script>");
		    out.flush();
		}
				
		out.flush();
		out.close();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

}
