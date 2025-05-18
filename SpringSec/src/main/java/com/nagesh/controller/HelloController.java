package com.nagesh.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class HelloController {

	@GetMapping("/")
	public String Greet(HttpServletRequest req) {
		return "hello nagesh" + req.getSession().getId();
	}
	
	
	
	
}
