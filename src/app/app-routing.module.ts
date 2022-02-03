import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule, Router } from '@angular/router';
import { CatsComponent } from './components/cats/cats.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';


const routes:Routes = [
  {path:'', redirectTo:'/cats', pathMatch:'full'},
  {path:'cats', component: CatsComponent},
  {path:'about', component: AboutComponent},
  {path:'**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ], 
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
