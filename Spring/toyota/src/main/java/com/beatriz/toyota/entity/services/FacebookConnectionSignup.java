package com.beatriz.toyota.entity.services;

import static org.apache.commons.lang3.RandomStringUtils.randomAlphabetic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionSignUp;
import org.springframework.stereotype.Service;

import com.beatriz.toyota.entity.dao.IAppUserDao;
import com.beatriz.toyota.entity.models.AppUser;

@Service
public class FacebookConnectionSignup implements ConnectionSignUp {

    @Autowired
    private IAppUserDao userRepository;

    @Override
    public String execute(Connection<?> connection) {
        System.out.println("signup === ");
        final AppUser user = new AppUser();
        user.setUsername(connection.getDisplayName());
        user.setPassword(randomAlphabetic(8));
        userRepository.save(user);
        return user.getUsername();
    }

}
