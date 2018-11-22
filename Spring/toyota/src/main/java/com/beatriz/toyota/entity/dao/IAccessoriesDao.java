package com.beatriz.toyota.entity.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.beatriz.toyota.entity.models.Accessories;

public interface IAccessoriesDao  extends CrudRepository<Accessories, Long>{
	List<Accessories> findByCarDealershipId(Long carDealershipId);
}
