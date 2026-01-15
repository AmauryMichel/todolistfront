import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Home } from './shared/components/home/home';
import { Register } from './shared/components/register/register';
import { Login } from './shared/components/login/login';
import { ProjectList } from './shared/components/project-list/project-list';

export const routes: Routes = [
    { path: '', component: Home, title:"Home" },
    { path: 'register', component: Register, title:"Register" },
    { path: 'login', component: Login, title:"Login" },
    { path: 'projects', component: ProjectList, title:"Project List" },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }