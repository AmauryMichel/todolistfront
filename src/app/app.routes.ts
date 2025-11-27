import { RouterModule, Routes } from '@angular/router';
import { Home } from './shared/components/home/home';
import { Register } from './shared/components/register/register';
import { Login } from './shared/components/login/login';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title:"Home"
    },
    {
        path: 'register',
        component: Register,
        title:"Register"
    },
    {
        path: 'login',
        component: Login,
        title:"Login"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }