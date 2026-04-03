import { Routes } from '@angular/router';
import { Main } from './main/main';
import { About } from './about/about';
import { Service } from './service/service';

export const routes: Routes = [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component:Main
  },
  {
    path: 'about',
component:About
  },
  {
    path: 'services',
   component:Service
   
  }
];
