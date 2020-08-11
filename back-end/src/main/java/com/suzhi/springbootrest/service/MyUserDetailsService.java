package com.suzhi.springbootrest.service;

import java.util.ArrayList;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

@Component
public class MyUserDetailsService implements UserDetailsService {

	public UserDetails loadUserByUsername(String name) {
		
		return new User("divakar@suzhi.com", "divakar", new ArrayList<>());
	}

}
