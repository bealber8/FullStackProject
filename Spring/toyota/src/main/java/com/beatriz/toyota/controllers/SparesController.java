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

import com.beatriz.toyota.entity.models.Spares;
import com.beatriz.toyota.entity.services.ISparesService;

@CrossOrigin(origins = {"*", "http://localhost:8080"})
@RestController
public class SparesController {
	@Autowired
	ISparesService modelService;
	
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
}
