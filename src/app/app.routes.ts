import { Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthLayoutComponent } from './layout/authLayout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/mainLayout/main-layout/main-layout.component';

export const routes: Routes = [

    {
        path: 'auth', component : AuthLayoutComponent,
        children: [
            
            {
            path: ('register') ,
                loadComponent: () => import("../app/components/auth/register/register.component").then(m => m.RegisterComponent)
            },
             {
                path: 'login',
                loadComponent: () => import("../app/components/auth/login/login.component").then(m => m.LoginComponent)
            },
        ]
    },

    {
        path : 'dashboard' , component : MainLayoutComponent,
        children : [
            {
                path : '', loadComponent : () => import('../app/components/dashboard/dashboard/dashboard.component').then(m => m.DashboardComponent)
            }
        ]
    },


    {
        path: '', component : AuthLayoutComponent,
        children: [
            {
                path : '' ,
                 loadComponent: () => import("../app/components/auth/register/register.component").then(m => m.RegisterComponent)
            },
        ]
    }
];


