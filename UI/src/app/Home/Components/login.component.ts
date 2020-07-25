import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Services
import { InquiryService } from '../Services/inquiry.service';

@Component({
    selector: 'inquiry',
    templateUrl: '../views/login.component.html',
})

export class LoginComponent implements OnInit {
	 registerForm: FormGroup;
	 submitted = false;
	 
	 constructor(private formBuilder: FormBuilder,private router: Router,private inquiryService:InquiryService) { }

	 ngOnInit() { 
	 	
	 	this.registerForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
	 }
	 
	 onSubmit() {

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        
        
        this.inquiryService.doLogin(this.f().userName.value,this.f().password.value).subscribe(
            data => {
            			if(data==="Successfull"){
            				(<any>this.router).navigate(['/admin-panel'], { relativeTo: this.router });
            			}else{
            				this.alertError();
            			}
            		},
            err => {
            			this.alertError();	
            	    },
            () => console.log("Service call complited ")
        );
     }
    
     // convenience getter for easy access to form fields
    f() { return this.registerForm.controls; }
    
    alertError(){
    	alert("User Name or password is not correct");
    	this.f().userName.setValue("");
    	this.f().password.setValue("");
    }
    
}
