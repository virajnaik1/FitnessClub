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

@Entity(name="CustomerDetailsMaster")
public class CustomerDetailsMaster extends BaseEntity{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "customerId")
	private Long customerId;
	
	@Column(name = "firstName")
	private String firstName;
	
	@Column(name = "lastName")
	private String lastName;
	
	@Column(name = "address")
	private String address;

	@Column(name = "dateOfBirth")
	private String dateOfBirth;

	@Column(name = "height")
	private String height;

	@Column(name = "breakFastTime")
	private String breakFastTime;

	@Column(name = "lunchFastTime")
	private String lunchFastTime;
	
	@Column(name = "eveningSnacksTime")
	private String eveningSnacksTime;
	
	@Column(name = "dinnerTime")
	private String dinnerTime;
	
	@Column(name = "craving")
	private String craving;
	
	@Column(name = "foodAllergies")
	private String foodAllergies;
	
	@Column(name = "foodPreference")
	private String foodPreference;
	
	@Column(name = "cookPreference")
	private String cookPreference;
	
	@Column(name = "typeOfExercise")
	private String typeOfExercise;
	
	@Column(name = "injuries")
	private String injuries;
	
	@Column(name = "existingExerciseUser")
	private String existingExerciseUser;
	
	@Column(name = "exercisePreference")
	private String exercisePreference;
	
	@Column(name = "existingAlcoholUser")
	private String existingAlcoholUser;
	
	@Column(name = "energyLevel")
	private String energyLevel;
	
	@Column(name = "exercisePreferenceTime")
	private String exercisePreferenceTime;
	
	@Column(name = "foodAndExercise")
	private String foodAndExercise;
	
	@Column(name = "postalAddress")
	private String postalAddress;
	
	@Column(name = "callDateAndTime")
	private String callDateAndTime;
	
	@Column(name = "extraInfo")
	private String extraInfo;
	
	@Column(name = "foodExclusive")
	private String foodExclusive;
	
	@Column(name = "gymAccess")
	private String gymAccess;
	
	@Column(name = "snackingTime")
	private String snackingTime;
	
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

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getHeight() {
		return height;
	}

	public void setHeight(String height) {
		this.height = height;
	}

	public String getBreakFastTime() {
		return breakFastTime;
	}

	public void setBreakFastTime(String breakFastTime) {
		this.breakFastTime = breakFastTime;
	}

	public String getLunchFastTime() {
		return lunchFastTime;
	}

	public void setLunchFastTime(String lunchFastTime) {
		this.lunchFastTime = lunchFastTime;
	}

	public String getEveningSnacksTime() {
		return eveningSnacksTime;
	}

	public void setEveningSnacksTime(String eveningSnacksTime) {
		this.eveningSnacksTime = eveningSnacksTime;
	}

	public String getDinnerTime() {
		return dinnerTime;
	}

	public void setDinnerTime(String dinnerTime) {
		this.dinnerTime = dinnerTime;
	}

	public String getCraving() {
		return craving;
	}

	public void setCraving(String craving) {
		this.craving = craving;
	}

	public String getFoodAllergies() {
		return foodAllergies;
	}

	public void setFoodAllergies(String foodAllergies) {
		this.foodAllergies = foodAllergies;
	}

	public String getFoodPreference() {
		return foodPreference;
	}

	public void setFoodPreference(String foodPreference) {
		this.foodPreference = foodPreference;
	}

	public String getCookPreference() {
		return cookPreference;
	}

	public void setCookPreference(String cookPreference) {
		this.cookPreference = cookPreference;
	}

	public String getTypeOfExercise() {
		return typeOfExercise;
	}

	public void setTypeOfExercise(String typeOfExercise) {
		this.typeOfExercise = typeOfExercise;
	}

	public String getInjuries() {
		return injuries;
	}

	public void setInjuries(String injuries) {
		this.injuries = injuries;
	}

	public String getExistingExerciseUser() {
		return existingExerciseUser;
	}

	public void setExistingExerciseUser(String existingExerciseUser) {
		this.existingExerciseUser = existingExerciseUser;
	}

	public String getExercisePreference() {
		return exercisePreference;
	}

	public void setExercisePreference(String exercisePreference) {
		this.exercisePreference = exercisePreference;
	}

	public String getExistingAlcoholUser() {
		return existingAlcoholUser;
	}

	public void setExistingAlcoholUser(String existingAlcoholUser) {
		this.existingAlcoholUser = existingAlcoholUser;
	}

	public String getEnergyLevel() {
		return energyLevel;
	}

	public void setEnergyLevel(String energyLevel) {
		this.energyLevel = energyLevel;
	}

	public String getExercisePreferenceTime() {
		return exercisePreferenceTime;
	}

	public void setExercisePreferenceTime(String exercisePreferenceTime) {
		this.exercisePreferenceTime = exercisePreferenceTime;
	}

	public String getFoodAndExercise() {
		return foodAndExercise;
	}

	public void setFoodAndExercise(String foodAndExercise) {
		this.foodAndExercise = foodAndExercise;
	}

	public String getPostalAddress() {
		return postalAddress;
	}

	public void setPostalAddress(String postalAddress) {
		this.postalAddress = postalAddress;
	}

	public String getCallDateAndTime() {
		return callDateAndTime;
	}

	public void setCallDateAndTime(String callDateAndTime) {
		this.callDateAndTime = callDateAndTime;
	}

	public String getExtraInfo() {
		return extraInfo;
	}

	public void setExtraInfo(String extraInfo) {
		this.extraInfo = extraInfo;
	}

	public String getFoodExclusive() {
		return foodExclusive;
	}

	public void setFoodExclusive(String foodExclusive) {
		this.foodExclusive = foodExclusive;
	}

	public String getGymAccess() {
		return gymAccess;
	}

	public void setGymAccess(String gymAccess) {
		this.gymAccess = gymAccess;
	}

	public String getSnackingTime() {
		return snackingTime;
	}

	public void setSnackingTime(String snackingTime) {
		this.snackingTime = snackingTime;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
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

	@Override
	public String toString() {
		return "CustomerDetailsMaster [id=" + id + ", customerId=" + customerId + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", address=" + address + ", dateOfBirth=" + dateOfBirth + ", height="
				+ height + ", breakFastTime=" + breakFastTime + ", lunchFastTime=" + lunchFastTime
				+ ", eveningSnacksTime=" + eveningSnacksTime + ", dinnerTime=" + dinnerTime + ", craving=" + craving
				+ ", foodAllergies=" + foodAllergies + ", foodPreference=" + foodPreference + ", cookPreference="
				+ cookPreference + ", typeOfExercise=" + typeOfExercise + ", injuries=" + injuries
				+ ", existingExerciseUser=" + existingExerciseUser + ", exercisePreference=" + exercisePreference
				+ ", existingAlcoholUser=" + existingAlcoholUser + ", energyLevel=" + energyLevel
				+ ", exercisePreferenceTime=" + exercisePreferenceTime + ", foodAndExercise=" + foodAndExercise
				+ ", postalAddress=" + postalAddress + ", callDateAndTime=" + callDateAndTime + ", extraInfo="
				+ extraInfo + ", foodExclusive=" + foodExclusive + ", gymAccess=" + gymAccess + ", snackingTime="
				+ snackingTime + ", creationDate=" + creationDate + "]";
	}
}
