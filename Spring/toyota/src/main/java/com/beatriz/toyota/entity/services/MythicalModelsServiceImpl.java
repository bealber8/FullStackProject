package com.beatriz.toyota.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beatriz.toyota.entity.dao.IMythicalModelsDao;
import com.beatriz.toyota.entity.models.MythicalModels;

@Service
public class MythicalModelsServiceImpl implements IMythicalModelsService{
	@Autowired
	private IMythicalModelsDao modelDao;
	
	@Override
	public MythicalModels getModel(long id){
		if (id <= 0) {
            throw new IllegalArgumentException("ID can not be 0 or <0");
        }
		return modelDao.findById(id).get();
	}

	@Override
	public List<MythicalModels> getAllModels() {
		return (List<MythicalModels>) modelDao.findAll();
	}

	@Override
	public void post(MythicalModels model) {
		modelDao.save(model);
		
	}

	@Override
	public void put(MythicalModels model, long id) {
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
