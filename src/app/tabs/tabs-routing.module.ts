import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'task',
        loadChildren: () => import('./../pages/task/task.module').then(m => m.TaskPageModule)
      },
      {
        path: 'edit',
        loadChildren: () => import('./../pages/edit/edit.module').then(m => m.EditPageModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./../pages/edit/edit.module').then(m => m.EditPageModule)
      },
      {
        path: 'geolocation',
        loadChildren: () => import('./../pages/geolocation/geolocation.module').then(m => m.GeolocationPageModule)
      },
      {
        path: 'product/:id',
        loadChildren: () => import('./../pages/details/details.module').then(m => m.DetailsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
