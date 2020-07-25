package com.fitfortune.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fitfortune.modal.LoginMaster;

public interface LoginMasterRepository extends JpaRepository<LoginMaster, Long>{
	
	@Query("SELECT u FROM login u WHERE u.userName = ?1 and u.password = ?2")
	public Optional<LoginMaster> userName(String userName, String password);

}