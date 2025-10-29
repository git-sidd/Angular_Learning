import { Routes } from '@angular/router';
import { Counter } from './counter/counter';
import { TodoApp } from './todo-app/todo-app';
import { Login } from './login/login';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path:'counter',component:Counter},
    {path:'todo',component:TodoApp},
    {path:'',component:Home},
    {path:'**',component:PageNotFound}
];
