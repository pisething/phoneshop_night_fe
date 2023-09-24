import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { BrandComponent } from './components/brand/brand.component';

const routes: Routes = [
  {path: "user",component: UserComponent},
  {path: "brand",component: BrandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
