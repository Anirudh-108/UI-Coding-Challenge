import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDescriptionComponent } from './component/product-description/product-description.component';

export const routes: Routes = [
    {
        path : "" , component: AdminDashboardComponent,
    },
    {
        path : "add-product" , component: AddProductComponent,
    },
    {
        path : "edit-product/:id" , component: EditProductComponent,
    },
    {
        path : "product-list" , component: ProductListComponent,
    },
    {
        path : "description/:description" , component: ProductDescriptionComponent,
    },
    
   
];
