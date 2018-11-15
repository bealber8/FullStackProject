package com.beatriz.toyota.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beatriz.toyota.entity.dao.IFutureModelsDao;
import com.beatriz.toyota.entity.models.FutureModels;

@Service
public class FutureModelsServiceImpl implements IFutureModelsService{
	@Autowired
	private IFutureModelsDao modelDao;
	
	@Override
	public FutureModels getModel(long id){
		if (id <= 0) {
            throw new IllegalArgumentException("ID can not be 0 or <0");
        }
		return modelDao.findById(id).get();
	}

	@Override
	public List<FutureModels> getAllModels() {
		return (List<FutureModels>) modelDao.findAll();
	}

	@Override
	public void post(FutureModels model) {
		modelDao.save(model);
		
	}

	@Override
	public void put(FutureModels model, long id) {
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
