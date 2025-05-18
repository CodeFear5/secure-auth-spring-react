package com.nagesh.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.nagesh.model.UserPrinciple;
import com.nagesh.model.Users;
import com.nagesh.repo.UserRepo;


@Service
public class MyUserDetailService implements UserDetailsService {

	@Autowired
	UserRepo repo;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		 
		Users user=repo.findByUsername(username);
		
		if(user==null) {
			System.out.println("user not found ");
			throw new UsernameNotFoundException("user not found ");

		}
		
		
		return  new UserPrinciple(user);
	}

}
