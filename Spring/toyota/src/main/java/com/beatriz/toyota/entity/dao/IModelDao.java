package com.beatriz.toyota.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.beatriz.toyota.entity.models.Model;

public interface IModelDao extends CrudRepository<Model, Long>{

}
