package ipu.board.vo;

import java.util.Date;

/*
CREATE TABLE ipu_board (
bbsID int NOT NULL,
bbsTitle varchar(50) NOT NULL,
bbsDate DATETIME NOT NULL,
bbsContent text NOT NULL,
bbsHit int NOT NULL DEFAULT 0,
userID varchar(50) NOT NULL
);
*/

public class Board {
	private int bbsID;
	private String bbsTitle;
	private Date bbsDate;
	private String bbsContent;
	private int bbsHit;
	private String userID;

	public int getBbsID() {
		return bbsID;
	}

	public void setBbsID(int bbsID) {
		this.bbsID = bbsID;
	}

	public String getBbsTitle() {
		return bbsTitle;
	}

	public void setBbsTitle(String bbsTitle) {
		this.bbsTitle = bbsTitle;
	}

	public Date getBbsDate() {
		return bbsDate;
	}

	public void setBbsDate(Date bbsDate) {
		this.bbsDate = bbsDate;
	}

	public String getBbsContent() {
		return bbsContent;
	}

	public void setBbsContent(String bbsContent) {
		this.bbsContent = bbsContent;
	}

	public int getBbsHit() {
		return bbsHit;
	}

	public void setBbsHit(int bbsHit) {
		this.bbsHit = bbsHit;
	}
	
	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}
}
