package com.beatriz.toyota.entity.services;

import java.util.List;

import com.beatriz.toyota.entity.models.Accessories;
import com.beatriz.toyota.entity.models.AppUser;
import com.beatriz.toyota.entity.models.Model;
import com.beatriz.toyota.entity.models.Spares;
import com.beatriz.toyota.entity.models.Suppliers;

public interface IModelService {
	public List<AppUser> getAllUsers();
	public Model getModel(long id);
	public List<Model> getAllModels();
	public void post(Model model);
	public void put(Model model, long id);
	public void deleteModel(long id);
	
	public Spares getSpare(long id);
	public List<Spares> getAllSpares();
	public void post(Spares spares);
	public void put(Spares spares, long id);
	public void deleteSpares(long id);
	public Suppliers getSuppliers(long id);
	public List<Suppliers> getAllSuppliers();
	public void post(Suppliers model);
}
