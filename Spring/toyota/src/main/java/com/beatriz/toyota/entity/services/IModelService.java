package com.beatriz.toyota.entity.services;

import java.util.List;

import com.beatriz.toyota.entity.models.Model;

public interface IModelService {
	public Model getModel(long id);
	public List<Model> getAllModels();
	public List<Model> getAllModelsByCarDealersId(long carDealershipId);
	public void post(Model model);
	public void put(Model model, long id);
	public void saveModelInCarDealershipByCarDealershipId(Model model, long carDealershipId);
	public void deleteModel(long id);
	
	
	
}
