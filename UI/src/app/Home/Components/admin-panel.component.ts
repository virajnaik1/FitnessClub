import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Model
import { InquiryMasters } from '../Models/InquiryMasters';

//Services
import { InquiryService } from '../Services/inquiry.service';

@Component({
    selector: 'admin-panel',
    templateUrl: '../views/admin-panel.component.html'
})

export class AdminPanelComponent implements OnInit {
	isSelectedData:boolean;
	private defaultColDef;
    columnDefs = [
        {headerName: 'Name', field: 'firstName', sortable: true, filter: true, checkboxSelection: true,suppressSizeToFit: true,width: 100 },
        {headerName: 'Contact no', field: 'phoneNo', sortable: true, filter: true },
        {headerName: 'Email Id', field: 'emailId', sortable: true, filter: true },
        {headerName: 'Date', field: 'creationDate', sortable: true, filter: true,
        	cellRenderer: (data) => {
     			return data.value ? (new Date(data.value)).toLocaleDateString() : '';
			} 
		},
        {headerName: 'Status', field: 'status', sortable: true, filter: true,
        	cellRenderer: (data) => {
     			if(data.value === "N"){
     				return "New";
     			}
     			if(data.value === "R"){
     				return "Rejected";
     			}
     			if(data.value === "L"){
     				return "Payment link send";
     			}
     			if(data.value === "D"){
     				return "In discussion";
     			}
     			if(data.value === "A"){
     				return "Accepted";
     			}
     			if(data.value === "J"){
     				return "Called-Joining Program";
     			}
     			if(data.value === "P"){
     				return "Payment Received";
     			}
			} 
		},
        {headerName: 'Actions',
        	template:
            `<button type="button" data-action-type="view" class="btn btn-success">View</button>`,
            suppressSizeToFit: true,
            width: 75 
        }    
    ];

    inquiryMasters: InquiryMasters[];

    constructor(private inquiryService:InquiryService) {
		 this.defaultColDef = { resizable: true };
    }

    ngOnInit() { 
    	this.inquiryService.fetchInquiryMastersDetails().subscribe(
            data => {
            			this.inquiryMasters = data;
            		},
            err => console.log(err),
            () => console.log("Service call complited ")
        );
    }
    
    public onRowClicked(e) {
        if (e.event.target !== undefined) {
            let data = e.data;
			this.isSelectedData=true;
			this.inquiryService.selectedInquiry(data);
        }
    }
    
    deSelectInquiry(){
    	this.isSelectedData=false;
    	this.inquiryService.fetchInquiryMastersDetails().subscribe(
            data => {
            			this.inquiryMasters = data;
            		},
            err => console.log(err),
            () => console.log("Service call complited ")
        );
    }
}

