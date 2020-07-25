package com.fitfortune.controller;

import java.io.IOException;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fitfortune.modal.CustomerDetailsMaster;
import com.fitfortune.modal.InquiryMaster;
import com.fitfortune.modal.LoginMaster;
import com.fitfortune.service.CustomerDetailsService;
import com.fitfortune.service.InquiryService;
import com.fitfortune.service.LoginService;

@Controller
@RequestMapping(value="inquiry")
public class InquiryController {
	 
	Logger logger = LoggerFactory.getLogger(InquiryController.class);
	
	@Autowired
	private InquiryService inquiryService;  
	
	@Autowired
	private CustomerDetailsService customerDetailsService;
	
	@Autowired
	private LoginService loginService;
	
	@RequestMapping("/_ah/health")
    public ResponseEntity<String> healthCheck() {
        return new ResponseEntity<>("Healthy", HttpStatus.OK);
    }
	
	@RequestMapping(value = "save", method = RequestMethod.POST, consumes = "application/json", produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> doBooking(@RequestBody String inquiryMasters) {
		InquiryMaster masters=null;
		ObjectMapper mapper=new ObjectMapper();
		try {
			masters = mapper.readValue(inquiryMasters, InquiryMaster.class);
			logger.info("event=doBooking, bookingMasters="+masters);
		} catch (IOException e) {
			e.printStackTrace();
		}
		inquiryService.save(masters);
		return ResponseEntity.status(HttpStatus.OK).body("Successfull");
	}

	@RequestMapping(value = "fetchAll", method = RequestMethod.GET)
	public ResponseEntity<Object[]> fetchInquiryMaster() {
		return ResponseEntity.status(HttpStatus.OK).body(inquiryService.getAll().toArray());
	}
	
	@RequestMapping(value = "update", method = RequestMethod.POST)
	public ResponseEntity<Object> updateStatus(@RequestParam String id, @RequestParam String status) {
		inquiryService.update(Long.valueOf(id), status);
		Optional<InquiryMaster> optionalInquiryMaster = inquiryService.fetchById(Long.valueOf(id));
		return ResponseEntity.status(HttpStatus.OK)
				.body(optionalInquiryMaster.isPresent() ? optionalInquiryMaster.get() : null);
	}
	
	@RequestMapping(value = "emailWithPayment", method = RequestMethod.POST, produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> sendMailWithPayment(@RequestParam String id, @RequestParam String cost) {
		inquiryService.sendEmailWithPayment(Long.valueOf(id), Double.valueOf(cost));
		return ResponseEntity.status(HttpStatus.OK).body("Successfull");
	}
	
	@RequestMapping(value = "fetchById", method = RequestMethod.GET)
	public ResponseEntity<Object> fetchInquiryMasterById(@RequestParam String id) {
		Optional<InquiryMaster> optionalInquiryMaster = inquiryService.fetchById(Long.valueOf(id));
		return ResponseEntity.status(HttpStatus.OK)
				.body(optionalInquiryMaster.isPresent() ? optionalInquiryMaster.get() : null);
	}
	
	@RequestMapping(value = "saveCustomerDetails", method = RequestMethod.POST, consumes = "application/json", produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> saveCustomerDetails(@RequestBody String customerDetailsMasters) {
		CustomerDetailsMaster masters = null;
		ObjectMapper mapper = new ObjectMapper();
		try {
			masters = mapper.readValue(customerDetailsMasters, CustomerDetailsMaster.class);
			logger.info("event=saveCustomerDetails, customerDetailsMasters=" + masters);
		} catch (IOException e) {
			e.printStackTrace();
		}
		customerDetailsService.save(masters);
		return ResponseEntity.status(HttpStatus.OK).body("Successfull");
	}
	
	@RequestMapping(value = "fetchAllCustomerDetails", method = RequestMethod.GET)
	public ResponseEntity<Object> fetchAllCustomerDetails(@RequestParam String id) {
		return ResponseEntity.status(HttpStatus.OK).body(customerDetailsService.fetchById(Long.valueOf(id)));
	}
	
	@RequestMapping(value = "doLogin", method = RequestMethod.GET, produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> doLogin(@RequestParam String userName, @RequestParam String password) {
		Optional<LoginMaster> loginMasterOptional = loginService.fetchByUserNamePassword(userName, password);
		if (loginMasterOptional.isPresent() == true) {
			return ResponseEntity.status(HttpStatus.OK).body("Successfull");
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not Successfull");
		}
	}
}
