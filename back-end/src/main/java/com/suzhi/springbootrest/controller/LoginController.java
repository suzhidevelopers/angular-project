package com.suzhi.springbootrest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.suzhi.springbootrest.constants.ErrorConstants;
import com.suzhi.springbootrest.jwt.JwtUtil;
import com.suzhi.springbootrest.model.AuthenticationRequest;
import com.suzhi.springbootrest.response.ErrorResponse;
import com.suzhi.springbootrest.response.LoginResponse;
import com.suzhi.springbootrest.service.MyUserDetailsService;

@RestController
public class LoginController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private MyUserDetailsService userDetailsService;

	@Autowired
	private JwtUtil jwtTokenUtil;

//	@GetMapping("/students/{studentId}/courses")
//	public List<Course> retrieveCoursesForStudent(@PathVariable String studentId) {
//		return userService.retrieveCourses(studentId);
//	}

	@PostMapping("/login")
	public ResponseEntity<Object> login(@RequestBody AuthenticationRequest authenticationRequest) {

		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(),
					authenticationRequest.getPassword()));
					//passwordEncoder.encode(authenticationRequest.getPassword())));
		} catch (BadCredentialsException be) {
			ErrorResponse errorResponse = new ErrorResponse(ErrorConstants.INVALID_EMAIL_PWD,
					ErrorResponse.ErrorCodes.E001);
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
		} catch (DisabledException de) {
			ErrorResponse errorResponse = new ErrorResponse(ErrorConstants.ACCT_DISABLE, ErrorResponse.ErrorCodes.E002);
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
		} catch (LockedException le) {
			ErrorResponse errorResponse = new ErrorResponse(ErrorConstants.ACCT_DISABLE, ErrorResponse.ErrorCodes.E003);
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
		}

		//final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getEmail());

		// final String jwt = jwtTokenUtil.generateToken(userDetails);
		
		final String jwt = jwtTokenUtil.generateToken(authenticationRequest.getEmail());

		LoginResponse jwtResponse = new LoginResponse(jwt);
		return ResponseEntity.status(HttpStatus.OK).body(jwtResponse);

	}
}
