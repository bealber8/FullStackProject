package com.beatriz.toyota.entity.services;

import java.util.List;

import com.beatriz.toyota.entity.models.Spares;

public interface ISparesService {
	public Spares getSpare(long id);
	public List<Spares> getAllSpares();
	public List<Spares> getAllSparesByCarDealershipId(long carDealershipId);
	public void post(Spares spares);
	public void put(Spares spares, long id);
	public void saveSpareInCarDealershipByCarDealershipId(Spares spares, long carDealershipId);
	public void deleteSpares(long id);
}
