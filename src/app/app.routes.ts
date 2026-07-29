import { Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthLayoutComponent } from './layout/authLayout/auth-layout/auth-layout.component';

export const routes: Routes = [

    {
        path: 'auth', component : AuthLayoutComponent,
        children: [
            {
                path: 'register',
                loadComponent: () => import("../app/components/auth/register/register.component").then(m => m.RegisterComponent)
            },
             {
                path: 'login',
                loadComponent: () => import("../app/components/auth/login/login.component").then(m => m.LoginComponent)
            },
        ]
    }
];


