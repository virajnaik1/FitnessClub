import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

//Model
import { InquiryMasters } from '../Models/InquiryMasters';

//Services
import { InquiryService } from '../Services/inquiry.service';

@Component({
    selector: 'inquiry',
    templateUrl: '../views/inquiry.component.html',
})

export class InquiryComponent implements OnInit {
	 registerForm: FormGroup;
	 submitted = false;
	 inquiryMasters:InquiryMasters=null;
	 
	 constructor(private formBuilder: FormBuilder, private _activatedRoute: ActivatedRoute,private inquiryService:InquiryService) { }

	 ngOnInit() { 
	 	
	 	this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            address: ['', Validators.required],
            phoneNo: ['', [Validators.required]],
            emailId: ['', [Validators.required, Validators.email]],
            instagram: ['', [Validators.required]],
            goal: ['', [Validators.required]],
            weakness: ['', [Validators.required]],
            seriousness: ['', [Validators.required]],
            nutrition: ['', [Validators.required]],
            existingNutritionUser: ['', [Validators.required]],
            nutritionPackage: ['', [Validators.required]],
            extraInfo: ['', [Validators.required]]
        });
	 }
	 
	 onSubmit() {
	 	this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        
        this.inquiryMasters=this.registerForm.value;
		this.inquiryMasters.status="N";
        
        console.log(this.registerForm.value);
        
        this.inquiryService.saveInquiry(this.inquiryMasters).subscribe(
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
