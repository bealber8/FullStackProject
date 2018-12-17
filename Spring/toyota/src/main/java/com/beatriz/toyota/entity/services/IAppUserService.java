package com.beatriz.toyota.entity.services;

import java.util.List;

import com.beatriz.toyota.entity.models.AppUser;

public interface IAppUserService {
	public AppUser getUser(long id);
	public List<AppUser> getAllUsers();
	public void post(AppUser user);
	public void put(AppUser user, long id);
	public void deleteUser(long id);
}
