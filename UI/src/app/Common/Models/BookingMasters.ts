import { BookingMaster } from "./BookingMaster";

export class BookingMasters implements BookingMaster {
    bookingId:number;
	firstName:string;
	lastName:string;
	address:string;
	phoneNo:string;
	emailId:string;
	noOfAdults:number;
	noOfChild:number;
	noOfSeniorCitizen:number;
	timestamp:Date;
	status:string;
	totalAmount:number;
	advance:number;
	tourId:number;
}