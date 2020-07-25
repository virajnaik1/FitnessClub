import { Component, OnInit, Input } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';

//Model
import { CustomerDetailsMasters } from '../Models/CustomerDetailsMasters';

//Services
import { InquiryService } from '../Services/inquiry.service';

@Component({
    selector: 'cust-info',
    templateUrl: '../views/customer-info.component.html'
})

export class CustomerInfoComponent implements OnInit {

	customerDetailsMasters:CustomerDetailsMasters;
	
	constructor(private inquiryService:InquiryService) {}
	
    ngOnInit() { 
    	console.log(this.inquiryService.inquiryMasters.id);
    	this.inquiryService.fetchCustomerMastersDetails(this.inquiryService.inquiryMasters.id).subscribe(
            data => {
            			this.customerDetailsMasters=data;
            			console.log(this.customerDetailsMasters);
            		},
            err => console.log(err),
            () => console.log("Service call completed ")
        ); 
    }
    
}
