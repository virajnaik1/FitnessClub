import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: '../views/app-header.component.html'
})

export class AppHeaderComponent implements OnInit {
    constructor() { }
    org_name: String = "FIT FORTUNE FITNESS CLUB";
    contact_no: String = "+91 9881696139";
    email_id: String = "fitfortune@gmail.com";

    ngOnInit() { }
    
}
