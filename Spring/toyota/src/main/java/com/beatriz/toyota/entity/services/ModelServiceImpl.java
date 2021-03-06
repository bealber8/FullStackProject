package com.beatriz.toyota.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beatriz.toyota.entity.dao.ICarDealershipDao;
import com.beatriz.toyota.entity.dao.IModelDao;
import com.beatriz.toyota.entity.models.Model;

@Service
public class ModelServiceImpl implements IModelService{

	@Autowired
	private IModelDao modelDao;
	
	@Autowired
	private ICarDealershipDao carDealershipDao;
	
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
		modelDao.deleteById(id);;
	}
	
	@Override
	public List<Model> getAllModelsByCarDealersId(long carDealershipId){
		List<Model> model = modelDao.findByCarDealershipId(carDealershipId);
		return model;
	}
	
	@Override
	public void saveModelInCarDealershipByCarDealershipId(Model model, long carDealershipId){
		carDealershipDao.findById(carDealershipId).ifPresent((x)->{
			model.setCarDealership(x);
			modelDao.save(model);
		});
	}
	
	

}
