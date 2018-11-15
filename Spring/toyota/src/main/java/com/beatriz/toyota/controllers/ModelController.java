package com.beatriz.toyota.controllers;

import java.util.List;
import java.util.NoSuchElementException;

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

import com.beatriz.toyota.entity.models.Accessories;
import com.beatriz.toyota.entity.models.AppUser;
import com.beatriz.toyota.entity.models.Model;
import com.beatriz.toyota.entity.models.Spares;
import com.beatriz.toyota.entity.models.Suppliers;
import com.beatriz.toyota.entity.services.IModelService;

@CrossOrigin(origins = {"*", "http://localhost:8080"})
@RestController
public class ModelController {

	@Autowired
	IModelService modelService;
	
	@GetMapping("/users")
	public List<AppUser> getAllUsers(){
		return modelService.getAllUsers();
	}
	
	@GetMapping("/models")
	public List<Model> getAllModels(){
		System.out.println("llegó a models");
		return modelService.getAllModels();
	}
	
	@GetMapping("/model/{id}")
	public ResponseEntity<Model> getOne(@PathVariable(value = "id")long id){
		try {
            Model model = modelService.getModel(id);
            if (model != null) {
                return ResponseEntity.status(HttpStatus.OK).body(model);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
		
	}
	
	@PostMapping("/model")
	public void add(Model model) {
		System.out.println("llegó al post de models");
		modelService.post(model);
	}
	
	@PutMapping("/model/{id}")
	public void update(Model model, @PathVariable(value = "id") long id) {
		modelService.put(model, id);
	}
	
	@DeleteMapping("/model/{id}")
	public void update(@PathVariable(value = "id") long id) {
		System.out.println("llegó al delete de model");
		modelService.deleteModel(id);
	}
	
	
	
	@GetMapping("/spares")
	public List<Spares> getAllSpares(){
		return modelService.getAllSpares();
	}
	
	@GetMapping("/spares/{id}")
	public ResponseEntity<Spares> getOneSpare(@PathVariable(value = "id")long id){
		try {
			Spares spare = modelService.getSpare(id);
            if (spare != null) {
                return ResponseEntity.status(HttpStatus.OK).body(spare);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
		
	}
	
	@PostMapping("/spare")
	public void add(Spares spare) {
		modelService.post(spare);
	}
	
	@PutMapping("/spare/{id}")
	public void update(Spares spare, @PathVariable(value = "id") long id) {
		modelService.put(spare, id);
	}
	
	@DeleteMapping("/spare/{id}")
	public void updateSpares(@PathVariable(value = "id") long id) {
		modelService.deleteSpares(id);
	}
	
	
	@GetMapping("/suppliers")
	public List<Suppliers> getAllSuppliers(){
		return modelService.getAllSuppliers();
	}
	
	@GetMapping("/suppliers/{id}")
	public ResponseEntity<Suppliers> getOneSuppliers(@PathVariable(value = "id")long id){
		try {
			Suppliers model = modelService.getSuppliers(id);
            if (model != null) {
                return ResponseEntity.status(HttpStatus.OK).body(model);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
		
	}
	
	@PostMapping("/supplier")
	public void add(Suppliers model) {
		modelService.post(model);
	}
}
