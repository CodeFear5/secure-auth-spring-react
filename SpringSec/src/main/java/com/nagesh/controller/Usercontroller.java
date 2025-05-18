package com.nagesh.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nagesh.model.Users;
import com.nagesh.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Usercontroller {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public Users register(@RequestBody Users user) {
        return service.register(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody Users user) {
        System.out.println(user);
        return service.verify(user);
    }
    @GetMapping("/users/count")
    public Long getUserCount() {
        return service.countUsers(); // Returns plain number (e.g. 42)
    }
    
    

}
