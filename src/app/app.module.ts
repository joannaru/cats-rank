import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatsComponent } from './components/cats/cats.component';
import { CatCardComponent } from './shared/cat-card/cat-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './shared/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatCardComponent,
    PageNotFoundComponent,
    MenuComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
