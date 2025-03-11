import { Routes } from '@angular/router';
import { AddComponent } from './comps/user/add/add.component';
import { ListComponent } from './comps/user/list/list.component';
import { LoginComponent } from './comps/user/login/login.component';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "add", component: AddComponent },
    { path: "list", component: ListComponent },
    { path: "login", component: LoginComponent }
];
