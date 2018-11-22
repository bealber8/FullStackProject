package com.beatriz.toyota.entity.models;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin(origins = {"http://localhost:8080" , "*"})
@Entity
@Table(name = "toyota_models")
public class Model implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotEmpty
	private String name;
	
	@NotNull
	private int power;
	
	@NotEmpty
	private String fuel;
	
	@NotNull
	private float price;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "car_dealership_id", nullable = false)
	CarDealership carDealership;
	
	@ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                CascadeType.PERSIST,
                CascadeType.MERGE
            })
    @JoinTable(
    		name = "toyota_models_toyota_suppliers_rel",
            joinColumns = @JoinColumn(name = "toyota_models_id"),
            inverseJoinColumns = @JoinColumn(name = "toyota_suppliers_id"))
    private Set<Suppliers> suppliers;

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

	public int getPower() {
		return power;
	}

	public void setPower(int power) {
		this.power = power;
	}

	public String getFuel() {
		return fuel;
	}

	public void setFuel(String fuel) {
		this.fuel = fuel;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public CarDealership getCarDealership() {
		return carDealership;
	}

	public void setCarDealership(CarDealership carDealership) {
		this.carDealership = carDealership;
	}

	public Set<Suppliers> getSuppliers() {
		return suppliers;
	}

	public void setSuppliers(Set<Suppliers> suppliers) {
		this.suppliers = suppliers;
	}

	
	
	public Model(@NotEmpty String name, @NotNull int power, @NotEmpty String fuel, @NotNull float price,
			CarDealership carDealership, Set<Suppliers> suppliers) {
		super();
		this.name = name;
		this.power = power;
		this.fuel = fuel;
		this.price = price;
		this.carDealership = carDealership;
		this.suppliers = suppliers;
	}

	public Model() {
		
	}
	
	
}
