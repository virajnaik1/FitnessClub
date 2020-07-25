import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

//Model
import { CustomerDetailsMasters } from '../Models/CustomerDetailsMasters';

//Services
import { InquiryService } from '../Services/inquiry.service';

@Component({
    selector: 'customerDetails',
    templateUrl: '../views/customer-details.component.html',
})

export class CustomerDetailsComponent implements OnInit {
	 registerForm: FormGroup;
	 submitted = false;
	 customerDetailsMasters:CustomerDetailsMasters=null;
	 cust_id:number;
	 
	 constructor(private formBuilder: FormBuilder, private _activatedRoute: ActivatedRoute,private inquiryService:InquiryService) { 
	 	this._activatedRoute.queryParams.subscribe(params => {
	        this.cust_id = params['cust_id'];
    	});
	 }

	 ngOnInit() { 
	 
	 	this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            dateOfBirth: ['', Validators.required],
            height: ['', [Validators.required]],
            breakFastTime: ['', [Validators.required]],
            lunchFastTime: ['', [Validators.required]],
            eveningSnacksTime: ['', [Validators.required]],
            dinnerTime: ['', [Validators.required]],
            craving: ['', [Validators.required]],
            foodAllergies: ['', [Validators.required]],
            foodPreference: ['', [Validators.required]],
            cookPreference: ['', [Validators.required]],
            typeOfExercise: ['', [Validators.required]],
            injuries: ['', [Validators.required]],
            existingExerciseUser: ['', [Validators.required]],
            exercisePreference: ['', [Validators.required]],
            existingAlcoholUser: ['', [Validators.required]],
            energyLevel: ['', [Validators.required]],
            exercisePreferenceTime: ['', [Validators.required]],
            foodAndExercise: ['', [Validators.required]],
            postalAddress: ['', [Validators.required]],
            callDateAndTime: ['', [Validators.required]],
            extraInfo: ['', [Validators.required]],
            foodExclusive: ['', [Validators.required]],
            gymAccess: ['', [Validators.required]],
            snackingTime: ['', [Validators.required]]
		});
	 	
	 	this.inquiryService.fetchInquiryMastersDetailsId(this.cust_id).subscribe(
            data => {
            			this.registerForm.controls.firstName.setValue(data.firstName);
        				this.registerForm.controls.lastName.setValue(data.lastName);
            		},
            err => console.log(err),
            () => console.log("Service call completed ")
        ); 	
	 }
	 
	 onSubmit() {
	 	this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        
        this.customerDetailsMasters=this.registerForm.value;
		this.customerDetailsMasters.customerId=this.cust_id;
		
		this.inquiryService.saveCustomerDetails(this.customerDetailsMasters).subscribe(
            data => {
            			alert(data);
            		},
            err => console.log(err),
            () => console.log("Service call complited ")
        );        
     }
    
     // convenience getter for easy access to form fields
    f() { return this.registerForm.controls; }
    
}
