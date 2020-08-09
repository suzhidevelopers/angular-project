package com.suzhi.springbootrest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.suzhi.springbootrest.model.User;
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
	public ResponseEntity<Void> login(@RequestBody User user) {

		User matchingUser = loginService.retrieveUser(user);

		if (matchingUser == null)
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		else {

			return ResponseEntity.ok().build();
		}
	}
}
