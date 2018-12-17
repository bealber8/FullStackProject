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
	
	@GetMapping("/models")
	public List<Model> getAllModels(){
		System.out.println("llegó a models");
		return modelService.getAllModels();
	}
	
	@GetMapping("/cardealership/{carDealershipId}/models")
	public List<Model> getAllModelsByCarDealersId(@PathVariable (value = "carDealershipId") Long carDealershipId){
		return modelService.getAllModelsByCarDealersId(carDealershipId);
	}
	
	@GetMapping("/model/{id}")
	public ResponseEntity<Model> getOne(@PathVariable(value = "id")long id){
		//try {
            Model model = modelService.getModel(id);
            if (model != null) {
                return ResponseEntity.status(HttpStatus.OK).body(model);
            } else {
            	System.out.println("Model with id " +id+" not found");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
/*
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }*/
		
	}
	
	@PostMapping("/model")
	public void add(Model model) {
		System.out.println("llegó al post de models");
		modelService.post(model);
	}
	
	@PostMapping("/cardealership/{carDealershipId}/model")
	public void save(Model model, @PathVariable (value = "carDealershipId") Long carDealershipId) {
		modelService.saveModelInCarDealershipByCarDealershipId(model, carDealershipId);
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
	
}
