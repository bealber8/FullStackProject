package com.beatriz.toyota.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beatriz.toyota.entity.dao.IAppUserDao;
import com.beatriz.toyota.entity.models.AppUser;

@Service
public class AppUserServiceImpl implements IAppUserService{
	
	@Autowired
	private IAppUserDao usersDao;
	
	@Override
	public List<AppUser> getAllUsers() {
		return (List<AppUser>) usersDao.findAll();
	}
	
	@Override
	public AppUser getUser(long id){
		if (id <= 0) {
            throw new IllegalArgumentException("ID can not be 0 or <0");
        }
		return usersDao.findById(id).get();
	}
	
	@Override
	public void post(AppUser user) {
		usersDao.save(user);
		
	}

	@Override
	public void put(AppUser user, long id) {
		usersDao.findById(id).ifPresent((x)->{
			user.setId(id);
			usersDao.save(user);
		});
	}

	@Override
	public void deleteUser(long id) {
		usersDao.deleteById(id);
	}
}
