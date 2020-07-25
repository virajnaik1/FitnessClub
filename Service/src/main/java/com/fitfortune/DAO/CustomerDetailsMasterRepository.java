package com.fitfortune.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fitfortune.modal.CustomerDetailsMaster;

public interface CustomerDetailsMasterRepository extends JpaRepository<CustomerDetailsMaster, Long>{

	public Optional<CustomerDetailsMaster> customerId(Long customerId);
}