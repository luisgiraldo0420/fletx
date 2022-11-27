import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsComponent } from './components/cocktails/cocktails.component';
import { DetailComponent } from './components/cocktails/detail/detail.component';
const routes: Routes = [
  {path: 'cocktails', component: CocktailsComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: '**', pathMatch: 'full',  redirectTo: 'cocktails'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
