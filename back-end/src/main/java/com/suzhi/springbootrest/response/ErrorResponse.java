package com.suzhi.springbootrest.response;

import org.springframework.stereotype.Component;

@Component
public class ErrorResponse {

	public ErrorResponse() {
		super();
	}

	public ErrorResponse(String message, ErrorResponse.ErrorCodes errorCode) {
		this.message = message;
		this.errorCode = errorCode;
	}

	public enum ErrorCodes {
		E001, E002, E003
	}

	private String message;
	private ErrorResponse.ErrorCodes errorCode;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public ErrorResponse.ErrorCodes getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(ErrorResponse.ErrorCodes errorCode) {
		this.errorCode = errorCode;
	}

	

}
