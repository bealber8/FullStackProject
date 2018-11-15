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

import com.beatriz.toyota.entity.models.Model;
import com.beatriz.toyota.entity.models.Suppliers;
import com.beatriz.toyota.entity.services.ISuppliersService;

@CrossOrigin(origins = {"*", "http://localhost:8080"})
@RestController
public class SuppliersController {
	@Autowired
	ISuppliersService modelService;
	
	@GetMapping("/suppliers")
	public List<Suppliers> getAllSuppliers(){
		return modelService.getAllSuppliers();
	}
	
	@GetMapping("/suppliers/{id}")
	public ResponseEntity<Suppliers> getOneSuppliers(@PathVariable(value = "id")long id){
		try {
			Suppliers supplier = modelService.getSuppliers(id);
            if (supplier != null) {
                return ResponseEntity.status(HttpStatus.OK).body(supplier);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
		
	}
	
	@PostMapping("/supplier")
	public void add(Suppliers supplier) {
		modelService.post(supplier);
	}
	
	@PutMapping("/supplier/{id}")
	public void update(Suppliers supplier, @PathVariable(value = "id") long id) {
		modelService.put(supplier, id);
	}
	
	@DeleteMapping("/supplier/{id}")
	public void update(@PathVariable(value = "id") long id) {
		System.out.println("llegó al delete de model");
		modelService.deleteSuppliers(id);
	}

}
