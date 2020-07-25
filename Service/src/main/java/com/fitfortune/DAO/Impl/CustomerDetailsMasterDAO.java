package com.fitfortune.DAO.Impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fitfortune.DAO.CustomerDetailsMasterRepository;
import com.fitfortune.modal.CustomerDetailsMaster;

@Repository
@Transactional
public class CustomerDetailsMasterDAO{

	@Autowired
	private CustomerDetailsMasterRepository customerDetailsMasterRepository;
	
	public List<CustomerDetailsMaster> getAll() {
		return customerDetailsMasterRepository.findAll();
	}

	public void save(CustomerDetailsMaster customerDetailsMaster) {
		customerDetailsMasterRepository.save(customerDetailsMaster);
	}

	public CustomerDetailsMaster fetchById(Long id) {
		Optional<CustomerDetailsMaster> customerDetailsMaster = customerDetailsMasterRepository.customerId(id);
		return customerDetailsMaster.isPresent() ? customerDetailsMaster.get() : null;
	}
}
