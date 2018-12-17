package com.beatriz.toyota.entity.models;



import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"http://localhost:8080" , "*"})
@Entity
@Table(name = "toyota_cardealership")
public class CarDealership implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotEmpty
	private String direction;
	
	@NotEmpty
	private String telephone;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDirection() {
		return direction;
	}

	public void setDirection(String direction) {
		this.direction = direction;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	

	public CarDealership(long id, @NotEmpty String direction, @NotEmpty String telephone) {
		super();
		this.id = id;
		this.direction = direction;
		this.telephone = telephone;
	}

	public CarDealership() {
		super();
	}
	
	
	
}
