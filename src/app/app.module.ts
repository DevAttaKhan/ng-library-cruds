import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { UpsertComponent } from './pages/upsert/upsert.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownValidatorDirective } from './directives/dropdown-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminRoutingModule } from './admin-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UpsertComponent,
    CardComponent,
    DropdownComponent,
    DropdownValidatorDirective,
    AdminLayoutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
