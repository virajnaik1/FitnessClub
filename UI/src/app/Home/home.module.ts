import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

import { HomeRoute } from "./home.routing";

//Component
import { HomePageComponent } from './Components/home-page.component';
import { InquiryComponent } from "./Components/inquiry.component";
import { AppHeaderComponent } from "./Components/app-header.component";
import { AdminPanelComponent } from "./Components/admin-panel.component";
import { Step1Component } from "./Components/step1.component";
import { AppFooterComponent } from "./Components/app-footer.component";
import { CustomerDetailsComponent } from "./Components/customer-details.component";
import { CustomerInfoComponent } from "./Components/customer-info.component";
import { LoginComponent } from "./Components/login.component";

//Service
import { InquiryService } from "./Services/inquiry.service";

@NgModule({
    imports: [CommonModule, RouterModule, HomeRoute,FormsModule,ReactiveFormsModule,AgGridModule.withComponents([])],
    exports: [HomePageComponent,AppHeaderComponent,AppFooterComponent],
    providers:[InquiryService],
    declarations: [HomePageComponent,InquiryComponent,AppHeaderComponent,AdminPanelComponent,Step1Component,
    AppFooterComponent,CustomerDetailsComponent,CustomerInfoComponent,LoginComponent]
})
export class HomeModule { }