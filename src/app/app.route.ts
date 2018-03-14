import { RouterModule, Routes, } from '@angular/router';
import { NgModule } from '@angular/core';
import { CrudComponent } from './crud/crud.component';
import { AlquilerComponent } from './alquiler/alquiler.component';

const appRoutes: Routes = [
    {path: '', component: AlquilerComponent },
    {path: 'crud', component: CrudComponent }
    
  ];
  

  export const AppRouter= RouterModule.forRoot(appRoutes);