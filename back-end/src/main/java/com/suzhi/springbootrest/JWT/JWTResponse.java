package com.suzhi.springbootrest.JWT;

public class JWTResponse {

	public JWTResponse(String jwt) {
		super();
		this.jwt = jwt;
	}

	public String getJwt() {
		return jwt;
	}

	public void setJwt(String jwt) {
		this.jwt = jwt;
	}

	public String jwt;
}
