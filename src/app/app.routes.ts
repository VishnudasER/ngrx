import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [



    {path:"",component:HomeComponent},
    {path:"register" ,component:RegisterComponent},
    {path:"login" , component:LoginComponent}
];
