package com.beatriz.toyota.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beatriz.toyota.entity.dao.IAccessoriesDao;
import com.beatriz.toyota.entity.models.Accessories;
@Service
public class AccessoriesServiceImpl implements IAccessoriesService{
	@Autowired
	private IAccessoriesDao accessoriesDao;
	
	@Override
	public Accessories getAccessory(long id){
		if (id <= 0) {
            throw new IllegalArgumentException("ID can not be 0 or <0");
        }
		return accessoriesDao.findById(id).get();
	}

	@Override
	public List<Accessories> getAllAccessories() {
		return (List<Accessories>) accessoriesDao.findAll();
	}

	@Override
	public void post(Accessories accessory) {
		accessoriesDao.save(accessory);
		
	}

	@Override
	public void put(Accessories accessory, long id) {
		accessoriesDao.findById(id).ifPresent((x)->{
			accessory.setId(id);
			accessoriesDao.save(accessory);
		});
	}

	@Override
	public void deleteAccessory(long id) {
		accessoriesDao.deleteById(id);
	}
}
