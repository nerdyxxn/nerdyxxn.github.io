package ipu.user.vo;
/*
userID varchar(30) NOT NULL,
userPassword varchar(50) NOT NULL,
userName varchar(50) NOT NULL,
userEmail varchar(100) NOT NULL,
userFirstRegnum varchar(10) NOT NULL,
userLastRegnum varchar(10) NOT NULL,
userPhone varchar(50) NOT NULL
 * */
public class User {
	private String userID;
	private String userPassword;
	private String userName;
	private String userEmail;
	private String userFirstRegnum;
	private String userLastRegnum;
	private String userPhone;
	
	
	public String getUserID() {
		return userID;
	}
	public void setUserID(String userID) {
		this.userID = userID;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserFirstRegnum() {
		return userFirstRegnum;
	}
	public void setUserFirstRegnum(String userFirstRegnum) {
		this.userFirstRegnum = userFirstRegnum;
	}
	public String getUserLastRegnum() {
		return userLastRegnum;
	}
	public void setUserLastRegnum(String userLastRegnum) {
		this.userLastRegnum = userLastRegnum;
	}
	public String getUserPhone() {
		return userPhone;
	}
	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}	
	
}
