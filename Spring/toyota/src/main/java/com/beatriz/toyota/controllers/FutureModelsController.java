package com.beatriz.toyota.controllers;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.beatriz.toyota.entity.models.FutureModels;
import com.beatriz.toyota.entity.services.IFutureModelsService;

@CrossOrigin(origins = {"*", "http://localhost:8080"})
@RestController
public class FutureModelsController {
	@Autowired
	IFutureModelsService modelService;
	
	@GetMapping("/futuremodels")
	public List<FutureModels> getAllModels(){
		return modelService.getAllModels();
	}
	
	@GetMapping("/futuremodels/{id}")
	public  ResponseEntity<FutureModels> getOne(@PathVariable(value = "id")long id){
		try {
			FutureModels model = modelService.getModel(id);
            if (model != null) {
                return ResponseEntity.status(HttpStatus.OK).body(model);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
		
	}
	
	@GetMapping("/futuremodelsimage/{id}")
	public byte[] getOneImage(@PathVariable(value = "id")long id){
		FutureModels model = modelService.getModel(id);
		
		writeImageFile(model.getImage());
		
		return model.getImage();
		/*
		try {
			FutureModels model = modelService.getModel(id);
            if (model != null) {
                return ResponseEntity.status(HttpStatus.OK).body(model);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }*/
		
	}
	
	@Async
	void writeImageFile(byte[] bytes) {
		byte[] data = Base64.getDecoder().decode(bytes);
		try(OutputStream stream = new FileOutputStream("otrapruebita.jpg")){
			stream.write(data);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	}
	
	@PostMapping("/futuremodel")
	public void add(FutureModels model) {
		modelService.post(model);
	}
	
	@PutMapping("/futuremodel/{id}")
	public void update(FutureModels model, @PathVariable(value = "id") long id) {
		modelService.put(model, id);
	}
	
	@DeleteMapping("/futuremodels/{id}")
	public void updateModel(@PathVariable(value = "id") long id) {
		modelService.deleteModel(id);
	}
}
