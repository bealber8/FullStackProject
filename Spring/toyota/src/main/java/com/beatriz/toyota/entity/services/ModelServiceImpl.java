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

}
