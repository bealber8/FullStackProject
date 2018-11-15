package com.beatriz.toyota.entity.services;

import java.util.List;

import com.beatriz.toyota.entity.models.Accessories;

public interface IAccessoriesService {
	public Accessories getAccessory(long id);
	public List<Accessories> getAllAccessories();
	public void post(Accessories accessory);
	public void put(Accessories accessory, long id);
	public void deleteAccessory(long id);
}
