import { Routes } from '@angular/router';
import { RegisterComponent } from './comps/user/register/add.component';
import { ListComponent } from './comps/user/list/list.component';
import { LoginComponent } from './comps/user/login/login.component';
import { DashboardComponent } from './comps/user/dashboard/dashboard.component';
import { AuthGuard } from './service/auth.guard';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "list", component: ListComponent },
    { path: "login", component: LoginComponent },
    { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] }
];
