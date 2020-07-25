package com.fitfortune.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitfortune.DAO.Impl.LoginMasterDAO;
import com.fitfortune.modal.LoginMaster;

@Service
public class LoginService {

	@Autowired
	private LoginMasterDAO loginMasterDAO;
	
	public Optional<LoginMaster> fetchByUserNamePassword(String userName,String password) {
		return loginMasterDAO.findByUserName(userName, password);
	}


}
