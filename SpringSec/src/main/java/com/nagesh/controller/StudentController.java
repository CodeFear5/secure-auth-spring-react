package com.nagesh.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nagesh.model.Student;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class StudentController {
	
	
private List<Student>students=new ArrayList<>(List.of(
		
		new Student(1,"nagesh"),
		new Student(2, "hari")
		
		
		));
	
	@GetMapping("/student")
		
	public List<Student> getStudents() {
		return students;
	}
	
	
	
	
	@GetMapping("/csrfToken")
	public CsrfToken getcsrfToken(HttpServletRequest req) {
		
		
		return (CsrfToken) req.getAttribute("_csrf");
	}
	
	@PostMapping("/student")
	public Student addStudent(@RequestBody Student student) {
		students.add(student);
		
		
		return  student;
	}
	
	

}
