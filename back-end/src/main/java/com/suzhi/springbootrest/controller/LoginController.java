package com.suzhi.springbootrest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.suzhi.springbootrest.JWT.JWTResponse;
import com.suzhi.springbootrest.constants.ErrorConstants;
import com.suzhi.springbootrest.model.User;
import com.suzhi.springbootrest.response.ErrorResponse;
import com.suzhi.springbootrest.service.LoginService;

@RestController
public class LoginController {

	@Autowired
	private LoginService loginService;

//	@GetMapping("/students/{studentId}/courses")
//	public List<Course> retrieveCoursesForStudent(@PathVariable String studentId) {
//		return userService.retrieveCourses(studentId);
//	}

	@PostMapping("/login")
	public ResponseEntity<Object> login(@RequestBody User user) {

		User matchingUser = loginService.retrieveUser(user);

		if (matchingUser == null) {
			ErrorResponse errorResponse = new ErrorResponse(ErrorConstants.INVALID_EMAIL_PWD,
					ErrorResponse.ErrorCodes.E001);
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);

		}

		else {
			JWTResponse jwtResponse = new JWTResponse("eKlY");
			System.out.println(jwtResponse);
			return ResponseEntity.status(HttpStatus.OK).body(jwtResponse);
		}
	}
}
