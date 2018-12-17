package com.beatriz.toyota.entity.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.beatriz.toyota.entity.models.Model;

public interface IModelDao extends CrudRepository<Model, Long>{
	List<Model> findByCarDealershipId(Long carDealershipId);
}
