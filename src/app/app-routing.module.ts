import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProblemeComponent } from './probleme/probleme.component';

const routes: Routes = [
      { path:'acceuil', component:AcceuilComponent},
      { path:'probleme', component:ProblemeComponent},
      {path:'', redirectTo:'acceuil', pathMatch:'full'},
      {path:'**', redirectTo:'acceuil', pathMatch:'full'} // si route est inexistante, redirigé vers acceuil
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
