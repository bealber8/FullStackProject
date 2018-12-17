package com.beatriz.toyota.entity.services;

import java.util.List;

import com.beatriz.toyota.entity.models.FutureModels;

public interface IFutureModelsService {
	public FutureModels getModel(long id);
	public List<FutureModels> getAllModels();
	public void post(FutureModels model);
	public void put(FutureModels model, long id);
	public void deleteModel(long id);
}
