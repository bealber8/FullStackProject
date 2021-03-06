package com.beatriz.toyota.entity.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "toyota_users")
public class AppUser implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotEmpty
	private String name;

	@NotEmpty
	private String surname;
	
	@NotNull
	private int age;
	
	@NotEmpty
	private String telephone;

	@NotEmpty
	private String email;
	
	@NotEmpty
	private String username;
	
	@NotEmpty
	private String password;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name="car_dealership_id", nullable = false)
	private CarDealership cardealership;
	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private List<Role> roles;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public AppUser(long id, String name, String surname, int age, String telephone, String email, String username, String password,
			 List<Role> roles) {
		super();
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.telephone = telephone;
		this.email = email;
		this.username = username;
		this.password = password;
		this.roles = roles;
	}

	public AppUser() {
		super();
	}	
	
	
	
	
}
