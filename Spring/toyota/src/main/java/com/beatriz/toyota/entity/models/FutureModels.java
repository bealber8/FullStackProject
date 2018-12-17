package com.beatriz.toyota.entity.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import org.hibernate.annotations.Type;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"http://localhost:8080" , "*"})
@Entity
@Table(name = "toyota_futuremodels")
public class FutureModels implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotEmpty
	private String name;
	
	@NotEmpty
	private String description;
	
	@Column(name = "image")
	@Type(type = "org.hibernate.type.BinaryType")
	private byte[] image;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name="car_dealership_id", nullable = false)
	private CarDealership cardealership;

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public FutureModels(@NotEmpty String name, @NotEmpty String description) {
		super();
		this.name = name;
		this.description = description;
	}

	public FutureModels() {
		super();
	}
	
}
