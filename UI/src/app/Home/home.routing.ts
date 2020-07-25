import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Component
import { HomePageComponent } from "./Components/home-page.component";
import { InquiryComponent } from "./Components/inquiry.component";
import { AdminPanelComponent } from "./Components/admin-panel.component";
import { CustomerDetailsComponent } from "./Components/customer-details.component";
import { LoginComponent } from "./Components/login.component";

const HomeRoutesConfig: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'booking',
        component: InquiryComponent
    },
    {
        path: 'admin-panel',
        component: AdminPanelComponent
    },
    {
        path: 'customerDetails',
        component: CustomerDetailsComponent
    },
    {
        path: 'loadLogin',
        component: LoginComponent
    }
]

export const HomeRoute: ModuleWithProviders = RouterModule.forChild(HomeRoutesConfig);