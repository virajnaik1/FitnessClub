package com.fitfortune.modal;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ResponseEntity {

	private String invoice_number;
	private String short_url;
	
	
	public ResponseEntity() {
		super();
	}
	
	public String getInvoice_number() {
		return invoice_number;
	}
	public void setInvoice_number(String invoice_number) {
		this.invoice_number = invoice_number;
	}
	public String getShort_url() {
		return short_url;
	}
	public void setShort_url(String short_url) {
		this.short_url = short_url;
	}
	@Override
	public String toString() {
		return "ResponseEntity [invoice_number=" + invoice_number + ", short_url=" + short_url + "]";
	}
}
