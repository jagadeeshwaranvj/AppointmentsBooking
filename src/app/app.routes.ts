import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { authguardGuard } from './guards/authguard-guard';
import { AdminDashboard } from './admin/admin-dashboard/admin-dashboard';
import { Providerdashboard } from './provider/providerdashboard/providerdashboard';
import { providerguardGuard } from './guards/providerguard-guard';
import { Customerdashboard } from './customer/customerdashboard/customerdashboard';
import { customerguardGuard } from './guards/customerguard-guard';
import { Register } from './admin/register/register';
import { Providerappointments } from './provider/providerappointments/providerappointments';
import { Provideravailability } from './provider/provideravailability/provideravailability';
import { Adminservice } from './admin/adminservice/adminservice';
import { Booking } from './customer/booking/booking';
import { MyAppointments } from './customer/my-appointments/my-appointments';
import { Adminreport } from './admin/adminreport/adminreport';
import { AdminAppointments } from './admin/admin-appointments/admin-appointments';
import { Admincustomer } from './admin/admincustomer/admincustomer';
import { Adminprovider } from './admin/adminprovider/adminprovider';


export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path:'admin', component: AdminDashboard, canActivate:[authguardGuard]},


{path:'admin/services',component:Adminservice, canActivate:[authguardGuard]},
    {path:'provider',component:Providerdashboard, canActivate:[providerguardGuard]},

{path:'provider/appointments',component:Providerappointments, canActivate:[providerguardGuard]},
{path:'provider/availability',component:Provideravailability, canActivate:[providerguardGuard]},
    {path:'customer',component:Customerdashboard, canActivate:[customerguardGuard]},
  {path:'customer/my-appointments',component:MyAppointments, canActivate:[customerguardGuard]},

{path:'admin/register',component:Register, canActivate:[authguardGuard]},
{path:'admin/appointments',component:AdminAppointments, canActivate:[authguardGuard]},

{path:'customer/booking',component:Booking, canActivate:[customerguardGuard]},
{path:'admin/customers',component:Admincustomer, canActivate:[authguardGuard]},
{path:'admin/providers',component:Adminprovider, canActivate:[authguardGuard]},

{path:'admin/reports',component:Adminreport, canActivate:[authguardGuard]},


    
];
