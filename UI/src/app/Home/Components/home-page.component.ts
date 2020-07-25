import { Component, OnInit, Input } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'home-page',
    templateUrl: '../views/home-page.component.html',
})
export class HomePageComponent implements OnInit {

	slider1: string[][] = [
		["app/Home/Images/Slider/Slide1.JPG","app/Home/Images/Slider/Slide2.JPG","app/Home/Images/Slider/Slide3.JPG"],
		["app/Home/Images/Slider/Slide4.JPG","app/Home/Images/Slider/Slide5.JPG","app/Home/Images/Slider/Slide6.JPG"],
		["app/Home/Images/Slider/Slide7.JPG","app/Home/Images/Slider/Slide8.JPG","app/Home/Images/Slider/Slide9.JPG"],
		["app/Home/Images/Slider/Slide10.JPG","app/Home/Images/Slider/Slide11.JPG","app/Home/Images/Slider/Slide12.JPG"],
		["app/Home/Images/Slider/Slide13.JPG","app/Home/Images/Slider/Slide14.JPG","app/Home/Images/Slider/Slide15.JPG"]
    ];
    
    constructor(private sanitizer: DomSanitizer,private router: Router) { }

    ngOnInit() { 
    }
    
}
