package com.beatriz.toyota.entity.services;

import java.util.List;

import com.beatriz.toyota.entity.models.MythicalModels;

public interface IMythicalModelsService {
	public MythicalModels getModel(long id);
	public List<MythicalModels> getAllModels();
	public void post(MythicalModels model);
	public void put(MythicalModels model, long id);
	public void deleteModel(long id);
}
