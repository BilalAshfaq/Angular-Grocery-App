import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {AutofocusModule} from 'angular-autofocus-fix';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AddItemComponent } from './add-item/add-item.component';
import { HomeComponent } from './home/home.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddItemComponent,
    HomeComponent,
    GroceryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutofocusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
