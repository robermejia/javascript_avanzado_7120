import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/products/products.component';
import { Error404Component } from './pages/error-404/error-404.component';



export const routes: Routes = [
    {path:"home", component: HomeComponent, title:"Home"},    
    {path:"products", component: ProductosComponent, title:"Products"},    
    {path:'**', component: Error404Component, title: "Página no encontrada"}
];
