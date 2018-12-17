package com.beatriz.toyota.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.beatriz.toyota.entity.models.AppUser;
import com.beatriz.toyota.entity.services.IAppUserService;

@CrossOrigin(origins = {"*", "http://localhost:8080"})
@RestController
public class AppUserController {
	@Autowired
	IAppUserService modelService;
	
	@GetMapping("/users")
	public List<AppUser> getAllUsers(){
		return modelService.getAllUsers();
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<AppUser> getOne(@PathVariable(value = "id")long id){
		try {
			AppUser user = modelService.getUser(id);
            if (user != null) {
                return ResponseEntity.status(HttpStatus.OK).body(user);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
		
	}
	
	@PostMapping("/users")
	public void add(AppUser user) {
		System.out.println("llegó al post de models");
		modelService.post(user);
	}
	
	@PutMapping("/users/{id}")
	public void update(AppUser user, @PathVariable(value = "id") long id) {
		modelService.put(user, id);
	}
	
	@DeleteMapping("/users/{id}")
	public void update(@PathVariable(value = "id") long id) {
		System.out.println("llegó al delete de model");
		modelService.deleteUser(id);
	}
}
