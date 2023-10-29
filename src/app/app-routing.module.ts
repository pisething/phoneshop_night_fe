import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { BrandFormComponent } from './components/brand/brand-form/brand-form.component';
import { BrandComponent } from './components/brand/brand.component';

const routes: Routes = [
  {path: "user",component: UserComponent},
  {path: "brand", component: BrandComponent, 
    children:[
      {path: "", redirectTo: "list", pathMatch: "full"},
      {path: "list",component: BrandListComponent},
      {path: "form",component: BrandFormComponent},
      {path: "form/:id",component: BrandFormComponent}
    ]
  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
