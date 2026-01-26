import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Home } from './shared/components/home/home';
import { Register } from './shared/components/register/register';
import { Login } from './shared/components/login/login';
import { ProjectList } from './shared/components/project-list/project-list';
import { ProjectPage } from './shared/components/project-page/project-page';

export const routes: Routes = [
    { path: '', component: Home, title:"Home" },
    { path: 'register', component: Register, title:"Register" },
    { path: 'login', component: Login, title:"Login" },
    { path: 'projects', component: ProjectList, title:"Project List" },
    { path: 'project/:id', component: ProjectPage, title:"Project" },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }