package com.beatriz.toyota.entity.models;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.beatriz.toyota.entity.models.Accessories;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"http://localhost:8080" , "*"})
@Entity
@Table(name = "toyota_suppliers")
public class Suppliers implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotEmpty
	private String nif;
	
	@NotEmpty
	private String name;
	
	@NotEmpty
	private String direction;
	
	@NotEmpty
	private String telephone;
	
	@ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                CascadeType.PERSIST,
                CascadeType.MERGE
            },
            mappedBy = "suppliers")
    private Set<Model> models;
	
	@ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                CascadeType.PERSIST,
                CascadeType.MERGE
            },
            mappedBy = "suppliers")
    private Set<Accessories> accessories;
	
	@ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                CascadeType.PERSIST,
                CascadeType.MERGE
            },
            mappedBy = "suppliers")
    private Set<Spares> spares;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNif() {
		return nif;
	}

	public void setNif(String nif) {
		this.nif = nif;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public Set<Model> getModels() {
		return models;
	}

	public void setModels(Set<Model> models) {
		this.models = models;
	}

	public Set<Accessories> getAccessories() {
		return accessories;
	}

	public void setAccessories(Set<Accessories> accessories) {
		this.accessories = accessories;
	}

	public Set<Spares> getSpares() {
		return spares;
	}

	public void setSpares(Set<Spares> spares) {
		this.spares = spares;
	}

	public Suppliers() {
		super();
	}

	public Suppliers(@NotEmpty String nif, @NotEmpty String name, @NotEmpty String direction,
			@NotEmpty String telephone) {
		super();
		this.nif = nif;
		this.name = name;
		this.direction = direction;
		this.telephone = telephone;
	}

}
