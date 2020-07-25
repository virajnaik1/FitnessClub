package com.fitfortune.modal;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

@Entity(name="inquiry")
public class InquiryMaster extends BaseEntity{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "firstname")
	private String firstName;

	@Column(name = "lastname")
	private String lastName;

	@Column(name = "address")
	private String address;

	@Column(name = "mobileno")
	private String phoneNo;

	@Column(name = "emailid")
	private String emailId;

	@Column(name = "instaid")
	private String instagram;

	@Column(name = "goal")
	private String goal;
	
	@Column(name = "weakness")
	private String weakness;
	
	@Column(name = "seriousness")
	private String seriousness;
	
	@Column(name = "oknutrition")
	private String nutrition;
	
	@Column(name = "existingNutritionUser")
	private String existingNutritionUser;
	
	@Column(name = "package")
	private String nutritionPackage;
	
	@Column(name = "extraInfo")
	private String extraInfo;
	
	@Column(name = "status")
	private String status;
	
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="creationdate")
	private Date creationDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getInstagram() {
		return instagram;
	}

	public void setInstagram(String instagram) {
		this.instagram = instagram;
	}

	public String getGoal() {
		return goal;
	}

	public void setGoal(String goal) {
		this.goal = goal;
	}

	public String getWeakness() {
		return weakness;
	}

	public void setWeakness(String weakness) {
		this.weakness = weakness;
	}

	public String getSeriousness() {
		return seriousness;
	}

	public void setSeriousness(String seriousness) {
		this.seriousness = seriousness;
	}

	public String getNutrition() {
		return nutrition;
	}

	public void setNutrition(String nutrition) {
		this.nutrition = nutrition;
	}

	public String getExistingNutritionUser() {
		return existingNutritionUser;
	}

	public void setExistingNutritionUser(String existingNutritionUser) {
		this.existingNutritionUser = existingNutritionUser;
	}

	public String getNutritionPackage() {
		return nutritionPackage;
	}

	public void setNutritionPackage(String nutritionPackage) {
		this.nutritionPackage = nutritionPackage;
	}

	public String getExtraInfo() {
		return extraInfo;
	}

	public void setExtraInfo(String extraInfo) {
		this.extraInfo = extraInfo;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	@Override
	public String toString() {
		return "InquiryMaster [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", address="
				+ address + ", phoneNo=" + phoneNo + ", emailId=" + emailId + ", instagram=" + instagram + ", goal="
				+ goal + ", weakness=" + weakness + ", seriousness=" + seriousness + ", nutrition=" + nutrition
				+ ", existingNutritionUser=" + existingNutritionUser + ", nutritionPackage=" + nutritionPackage
				+ ", extraInfo=" + extraInfo + ", status=" + status + "]";
	}

}
