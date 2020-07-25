package com.fitfortune.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitfortune.DAO.Impl.CustomerDetailsMasterDAO;
import com.fitfortune.modal.CustomerDetailsMaster;

@Service
public class CustomerDetailsService {

	@Autowired
	private CustomerDetailsMasterDAO customerDetailsMasterDAO;
	
	public void save(CustomerDetailsMaster customerDetailsMaster) {
		customerDetailsMasterDAO.save(customerDetailsMaster);
	}

	public List<CustomerDetailsMaster> getAll() {
		return customerDetailsMasterDAO.getAll();
	}
	
	public CustomerDetailsMaster fetchById(Long id) {
		return customerDetailsMasterDAO.fetchById(id);
	}


}
