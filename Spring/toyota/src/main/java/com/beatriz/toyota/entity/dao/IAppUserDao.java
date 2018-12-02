package com.beatriz.toyota.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.beatriz.toyota.entity.models.AppUser;


public interface IAppUserDao extends CrudRepository<AppUser, Long>{
	public AppUser findUserByUsername(String username);
}
