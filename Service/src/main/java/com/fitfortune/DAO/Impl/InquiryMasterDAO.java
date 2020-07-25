package com.fitfortune.DAO.Impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fitfortune.DAO.InquiryMasterRepository;
import com.fitfortune.modal.InquiryMaster;


@Repository
@Transactional
public class InquiryMasterDAO{

	@Autowired
	private InquiryMasterRepository inquiryMasterRepository;
	
	public List<InquiryMaster> getAll() {
		return inquiryMasterRepository.findAll();
	}

	public void save(InquiryMaster inquiryMaster) {
		inquiryMasterRepository.save(inquiryMaster);
	}
	
	public void update(Long id, String status) {
		Optional<InquiryMaster> inquiryMasterOptional = findById(id);
		if (inquiryMasterOptional.isPresent()) {
			InquiryMaster inquiryMaster = inquiryMasterOptional.get();
			inquiryMaster.setStatus(status);
			inquiryMasterRepository.save(inquiryMaster);
		}
	}
	
	public Optional<InquiryMaster> findById(Long id){
		return inquiryMasterRepository.findById(id);
	}
}
