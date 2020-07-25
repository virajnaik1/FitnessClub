import { Component, OnInit, Input } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';

//Model
import { InquiryMasters } from '../Models/InquiryMasters';

//Services
import { InquiryService } from '../Services/inquiry.service';

@Component({
    selector: 'step1',
    templateUrl: '../views/step1.component.html'
})

export class Step1Component implements OnInit {

	package:string;
	
	inquiryMasters:InquiryMasters;
	
	constructor(private inquiryService:InquiryService) {}
	
    ngOnInit() { 
    }
    
    @Input('data')
    set setData(data: InquiryMasters) {
        this.inquiryMasters=data;
    }
    
   startDiscussion(){
   		let id=this.inquiryService.inquiryMasters.id;
   		this.updateStatus(id,"D");
   }
   
   acceptLead(){
   		let id=this.inquiryService.inquiryMasters.id;
   		this.updateStatus(id,"A");
   }
   
   rejectLead(){
   		let id=this.inquiryService.inquiryMasters.id;
   		this.updateStatus(id,"R");
   }
   
   joining(){
   		let id=this.inquiryService.inquiryMasters.id;
   		this.updateStatus(id,"J");
   }
   
   sendPaymentLink(){
	   	let id=this.inquiryService.inquiryMasters.id;
	   	this.inquiryService.sendEmailPayment(id,this.package).subscribe(
            data => {
            			this.inquiryMasters=data;
            			this.inquiryService.selectedInquiry(data);
            		},
            err => console.log(err),
            () => console.log("Service call complited ")
        );
   }
   
   markAsPaid(){
	   	let id=this.inquiryService.inquiryMasters.id;
	   	this.updateStatus(id,"P");
   }
   
   updateStatus(id:number,status:string){
   		this.inquiryService.updateStatus(id,status).subscribe(
            data => {
            			this.inquiryMasters=data;
            			this.inquiryService.selectedInquiry(data);
            		},
            err => console.log(err),
            () => console.log("Service call complited ")
        );
   }
}
