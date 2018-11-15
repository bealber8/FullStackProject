package com.beatriz.toyota.entity.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beatriz.toyota.entity.dao.IAccessoriesDao;
import com.beatriz.toyota.entity.dao.IAppUserDao;
import com.beatriz.toyota.entity.dao.IModelDao;
import com.beatriz.toyota.entity.dao.ISparesDao;
import com.beatriz.toyota.entity.dao.ISuppliersDao;
import com.beatriz.toyota.entity.models.Accessories;
import com.beatriz.toyota.entity.models.AppUser;
import com.beatriz.toyota.entity.models.Model;
import com.beatriz.toyota.entity.models.Spares;
import com.beatriz.toyota.entity.models.Suppliers;

@Service
public class ModelServiceImpl implements IModelService{

	@Autowired
	private IModelDao modelDao;
	
	
	
	@Autowired
	private ISparesDao sparesDao;
	
	@Autowired
	private IAppUserDao usersDao;
	
	@Autowired
	private ISuppliersDao supliersDao;
	
	@Override
	public List<AppUser> getAllUsers() {
		return (List<AppUser>) usersDao.findAll();
	}
	
	@Override
	public Model getModel(long id){
		if (id <= 0) {
            throw new IllegalArgumentException("ID can not be 0 or <0");
        }
		return modelDao.findById(id).get();
	}

	@Override
	public List<Model> getAllModels() {
		return (List<Model>) modelDao.findAll();
	}

	@Override
	public void post(Model model) {
		modelDao.save(model);
		
	}

	@Override
	public void put(Model model, long id) {
		modelDao.findById(id).ifPresent((x)->{
			model.setId(id);
			modelDao.save(model);
		});
	}

	@Override
	public void deleteModel(long id) {
		modelDao.deleteById(id);
	}
	
	
	
	@Override
	public Spares getSpare(long id){
		if (id <= 0) {
            throw new IllegalArgumentException("ID can not be 0 or <0");
        }
		return sparesDao.findById(id).get();
	}

	@Override
	public List<Spares> getAllSpares() {
		return (List<Spares>) sparesDao.findAll();
	}

	@Override
	public void post(Spares spares) {
		sparesDao.save(spares);
		
	}

	@Override
	public void put(Spares spares, long id) {
		sparesDao.findById(id).ifPresent((x)->{
			spares.setId(id);
			sparesDao.save(spares);
		});
	}

	@Override
	public void deleteSpares(long id) {
		sparesDao.deleteById(id);
	}
	
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
	public void post(Suppliers model) {
		supliersDao.save(model);
		
	}
}
