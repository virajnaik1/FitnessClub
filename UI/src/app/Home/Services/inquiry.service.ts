import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

import { InquiryMasters } from '../Models/InquiryMasters';
import { CustomerDetailsMasters } from '../Models/CustomerDetailsMasters';

@Injectable()
export class InquiryService {
	
	inquiryMasters:InquiryMasters;
	customerDetailsMasters:CustomerDetailsMasters;
	
    constructor(private _httpClient: HttpClient) { }
    
    getServerPath():string{
    	return window.location.protocol+'/';
    }
    
    saveInquiry(inquiryMasters:InquiryMasters): Observable<string>{
	    let headers = new HttpHeaders();
	  	headers.append('Content-Type', 'application/json');
        return this._httpClient.post<string>(this.getServerPath()+'inquiry/save', inquiryMasters, { headers, responseType: 'text' as 'json' });
    }
    
    fetchInquiryMastersDetails(): Observable<InquiryMasters[]>{
        return this._httpClient.get<InquiryMasters[]>(this.getServerPath()+'inquiry/fetchAll', { responseType: 'json'});
    }
    
    selectedInquiry(data:InquiryMasters){
    	this.inquiryMasters=data;
    }
    
    updateStatus(id:number,status:string): Observable<InquiryMasters>{
	    let body = new HttpParams();
		body = body.set('id', id.toString());
		body = body.set('status', status);
        return this._httpClient.post<InquiryMasters>(this.getServerPath()+'inquiry/update', body);
    }
    
    sendEmailPayment(id:number,packages:string): Observable<InquiryMasters>{
    	let cost:number;
    	let body = new HttpParams();
    	
    	switch(packages){
    		case "trialPackage":{
    			cost=3700;
    			break;
    		}
    		case "fourWeekPackage":{
    			cost=5900;
    			break;
    		}
    		case "twelveWeekPackage":{
    			cost=15,900;
    			break;
    		}
    	}
		body = body.set('id', id.toString());
		body = body.set('cost', cost.toString());
        return this._httpClient.post<InquiryMasters>(this.getServerPath()+'inquiry/emailWithPayment', body);
    }
    
    fetchInquiryMastersDetailsId(id:number): Observable<InquiryMasters>{
    	let param = new HttpParams().set("id",id.toString());
        return this._httpClient.get<InquiryMasters>(this.getServerPath()+'inquiry/fetchById',{ responseType: 'json',params: param});
    }
    
    saveCustomerDetails(customerDetailsMasters:CustomerDetailsMasters): Observable<string>{
	    let headers = new HttpHeaders();
	  	headers.append('Content-Type', 'application/json');
        return this._httpClient.post<string>(this.getServerPath()+'inquiry/saveCustomerDetails', customerDetailsMasters, { headers, responseType: 'text' as 'json' });
    }
    
    fetchCustomerMastersDetails(id:number): Observable<CustomerDetailsMasters>{
    	let param = new HttpParams().set("id",id.toString());
        return this._httpClient.get<CustomerDetailsMasters>(this.getServerPath()+'inquiry/fetchAllCustomerDetails', { responseType: 'json',params: param});
    }
    
    doLogin(userName:string,password:string): Observable<string>{
    	let param = new HttpParams().set("userName",userName).set("password",password);
        return this._httpClient.get<string>(this.getServerPath()+'inquiry/doLogin',{ responseType: 'text' as 'json',params: param});
    }
    
}