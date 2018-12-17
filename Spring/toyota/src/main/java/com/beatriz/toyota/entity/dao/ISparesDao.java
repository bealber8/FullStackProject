package com.beatriz.toyota.entity.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.beatriz.toyota.entity.models.Spares;

public interface ISparesDao extends CrudRepository<Spares, Long>{
	List<Spares> findByCarDealershipId(Long carDealershipId);
}
