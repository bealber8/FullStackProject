package com.beatriz.toyota.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beatriz.toyota.entity.dao.ICarDealershipDao;
import com.beatriz.toyota.entity.dao.ISparesDao;
import com.beatriz.toyota.entity.models.Spares;

@Service
public class SparesServiceImpl implements ISparesService{
	@Autowired
	private ISparesDao sparesDao;
	
	@Autowired
	private ICarDealershipDao carDealershipDao;
	
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
	public List<Spares> getAllSparesByCarDealershipId(long carDealershipId) {
		List<Spares> spares = sparesDao.findByCarDealershipId(carDealershipId);
		return spares;
	}
	
	@Override
	public void saveSpareInCarDealershipByCarDealershipId(Spares spares, long carDealershipId) {
		carDealershipDao.findById(carDealershipId).ifPresent((x)->{
			spares.setCarDealership(x);
			sparesDao.save(spares);
		});
	}
}
