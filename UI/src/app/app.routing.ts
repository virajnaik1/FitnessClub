import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";

//Module
import { HomeModule } from "./Home/home.module";

const defaultRoutes: Routes = [
    {
        path: '',
        loadChildren: './Home/home.module#HomeModule'
    }
];

const HomeRoutes: Routes = [
    {
        path: "home",
        loadChildren: './Home/home.module#HomeModule'
    }
];


const appRoutes: Routes = [
    ...HomeRoutes,
    ...defaultRoutes
]

export const rootRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);