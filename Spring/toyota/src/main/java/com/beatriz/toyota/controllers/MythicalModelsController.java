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

import com.beatriz.toyota.entity.models.MythicalModels;
import com.beatriz.toyota.entity.services.IMythicalModelsService;

@CrossOrigin(origins = {"*", "http://localhost:8080"})
@RestController
public class MythicalModelsController {
	@Autowired
	IMythicalModelsService modelService;
	
	@GetMapping("/mythicalmodels")
	public List<MythicalModels> getAllModels(){
		return modelService.getAllModels();
	}
	
	@GetMapping("/mythicalmodels/{id}")
	public ResponseEntity<MythicalModels> getOne(@PathVariable(value = "id")long id){
		try {
			MythicalModels model = modelService.getModel(id);
            if (model != null) {
                return ResponseEntity.status(HttpStatus.OK).body(model);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
		
	}
	
	@PostMapping("/mythicalmodel")
	public void add(MythicalModels model) {
		modelService.post(model);
	}
	
	@PutMapping("/mythicalmodel/{id}")
	public void update(MythicalModels model, @PathVariable(value = "id") long id) {
		modelService.put(model, id);
	}
	
	@DeleteMapping("/mythicalmodel/{id}")
	public void updateAccessory(@PathVariable(value = "id") long id) {
		modelService.deleteModel(id);
	}
}
