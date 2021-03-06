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

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"http://localhost:8080" , "*"})
@Entity
@Table(name = "toyota_spares")
public class Spares implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotEmpty
	private String category;
	
	@NotEmpty
	private String name;
	
	@NotEmpty
	private String reference;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "car_dealership_id", nullable = false)
	CarDealership carDealership;
	
	@ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                CascadeType.PERSIST,
                CascadeType.MERGE
            })
    @JoinTable(
    		name = "toyota_spares_toyota_suppliers_rel",
            joinColumns = @JoinColumn(name = "toyota_spares_id"),
            inverseJoinColumns = @JoinColumn(name = "toyota_suppliers_id"))
    private Set<Suppliers> suppliers;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getReference() {
		return reference;
	}

	public void setReference(String reference) {
		this.reference = reference;
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

	public Spares(@NotEmpty String category, @NotEmpty String name, @NotEmpty String reference,
			CarDealership carDealership, Set<Suppliers> suppliers) {
		super();
		this.category = category;
		this.name = name;
		this.reference = reference;
		this.carDealership = carDealership;
		this.suppliers = suppliers;
	}

	public Spares() {
	}

	
	
	
}