package com.beatriz.toyota.entity.services;

import java.util.List;

import com.beatriz.toyota.entity.models.Model;
import com.beatriz.toyota.entity.models.Suppliers;

public interface ISuppliersService {
	public Suppliers getSuppliers(long id);
	public List<Suppliers> getAllSuppliers();
	public void post(Suppliers supplier);
	public void put(Suppliers supplier, long id);
	public void deleteSuppliers(long id);
}
