package com.beatriz.toyota.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beatriz.toyota.entity.dao.ISuppliersDao;
import com.beatriz.toyota.entity.models.Model;
import com.beatriz.toyota.entity.models.Suppliers;

@Service
public class SuppliersServiceImpl implements ISuppliersService{
	@Autowired
	private ISuppliersDao supliersDao;
	
	@Override
	public Suppliers getSuppliers(long id){
		if (id <= 0) {
            throw new IllegalArgumentException("ID can not be 0 or <0");
        }
		return supliersDao.findById(id).get();
	}

	@Override
	public List<Suppliers> getAllSuppliers() {
		return (List<Suppliers>) supliersDao.findAll();
	}

	@Override
	public void post(Suppliers supplier) {
		supliersDao.save(supplier);
		
	}
	
	@Override
	public void put(Suppliers supplier, long id) {
		supliersDao.findById(id).ifPresent((x)->{
			supplier.setId(id);
			supliersDao.save(supplier);
		});
	}

	@Override
	public void deleteSuppliers(long id) {
		supliersDao.deleteById(id);
	}
}
