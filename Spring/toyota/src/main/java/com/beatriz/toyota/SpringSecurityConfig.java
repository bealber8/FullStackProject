
package com.beatriz.toyota;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.beatriz.toyota.entity.services.JpaUserDetailsService;

@Configuration
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Autowired
	private JpaUserDetailsService userDetailsService;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
		return bCryptPasswordEncoder;
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		System.out.println("llega????");
		http.csrf().disable()
			.authorizeRequests()
			.antMatchers("/users").permitAll()
			.antMatchers("/accessories").permitAll()
			.antMatchers("/accessories/**").hasAnyRole("ADMIN")
			.antMatchers("/accessory").hasAnyRole("ADMIN")
			.antMatchers("/accessory/**").hasAnyRole("ADMIN")
			.antMatchers("/suppliers").hasAnyRole("ADMIN")
			.antMatchers("/models").hasAnyRole("ADMIN")
			.antMatchers(HttpMethod.DELETE, "/model/**").permitAll()
			.antMatchers("/supplier").permitAll()
			.antMatchers("/suppliers/**").hasAnyRole("ADMIN")
			.anyRequest().authenticated()
			.and()
			.httpBasic();
	}
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService)
			.passwordEncoder(passwordEncoder);
	}
}


