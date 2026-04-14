import { Routes } from '@angular/router';
import { Main } from './main/main';
import { About } from './about/about';
import { Service } from './service/service';
import { Contact } from './contact/contact';

export const routes: Routes = [{
    path: '',
    component: Main
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'service',
    component: Service
  },
  {
    path: 'contact',
    component: Contact
  }
];
