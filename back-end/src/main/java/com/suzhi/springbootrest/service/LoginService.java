package com.suzhi.springbootrest.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.suzhi.springbootrest.model.User;

@Component
public class LoginService {

	private static List<User> users = new ArrayList<>();

	static {

		User divakar = new User("divakar@suzhi.com", "divakar123");
		User adhavan = new User("adhavan@suzhi.com", "adhavan123");
		User jagadesh = new User("jagadesh@suzhi.com", "jagadesh123");
		User suzhideveloper = new User("suzhideveloper@suzhi.com", "suzhideveloper123");

		users.add(divakar);
		users.add(adhavan);
		users.add(jagadesh);
		users.add(suzhideveloper);
	}

	public List<User> retrieveAllUsers() {
		return users;
	}

	public User retrieveUser(User user) {
		for (User userObj : users) {
			if (userObj.getEmail().equals(user.getEmail()) && userObj.getPassword().equals(user.getPassword())) {
				return user;
			}
		}
		return null;
	}

}