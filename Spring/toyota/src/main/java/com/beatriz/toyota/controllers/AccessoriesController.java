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

import com.beatriz.toyota.entity.models.Accessories;
import com.beatriz.toyota.entity.services.IAccessoriesService;

@CrossOrigin(origins = {"*", "http://localhost:8080"})
@RestController
public class AccessoriesController {

	@Autowired
	IAccessoriesService modelService;
	
	@GetMapping("/accessories")
	public List<Accessories> getAllAccessories(){
		return modelService.getAllAccessories();
	}
	
	@GetMapping("/cardealership/{carDealershipId}/accessories")
	public List<Accessories> getAllAccessoriesByCarDealershipId(@PathVariable (value = "carDealershipId") long carDealershipId){
		return modelService.getAllAccessoriesByCarDealershipId(carDealershipId);
	}
	
	@GetMapping("/accessories/{id}")
	public ResponseEntity<Accessories> getOneAccessory(@PathVariable(value = "id")long id){
		try {
			Accessories accessory = modelService.getAccessory(id);
            if (accessory != null) {
                return ResponseEntity.status(HttpStatus.OK).body(accessory);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
		
	}
	
	@PostMapping("/accessory")
	public void add(Accessories accessory) {
		modelService.post(accessory);
	}
	
	@PostMapping("/cardealership/{carDealershipId}/accessory")
	public void save(Accessories accessory, @PathVariable (value = "carDealershipId") Long carDealershipId) {
		modelService.saveAccessoryInCarDealershipByCarDealershipId(accessory, carDealershipId);
	}
	
	@PutMapping("/accessory/{id}")
	public void update(Accessories accessory, @PathVariable(value = "id") long id) {
		modelService.put(accessory, id);
	}
	
	@DeleteMapping("/accessory/{id}")
	public void updateAccessory(@PathVariable(value = "id") long id) {
		modelService.deleteAccessory(id);
	}
}
