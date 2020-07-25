package com.fitfortune.DAO.Impl;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fitfortune.DAO.LoginMasterRepository;
import com.fitfortune.modal.LoginMaster;


@Repository
@Transactional
public class LoginMasterDAO{

	@Autowired
	private LoginMasterRepository loginMasterRepository;
	
	public Optional<LoginMaster> findByUserName(String userName, String password) {
		return loginMasterRepository.userName(userName, password);
	}
}
