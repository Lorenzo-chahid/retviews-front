import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ClothingListComponent } from './clothingList/clothingList.component';
import { ClothingFormComponent } from './clothingForm/clothingForm.component';
import { ClothingDetailComponent } from './clothingDetail/clothingDetail.component';
import { HomeComponent } from './home/home.component';
import { UpdateClothingComponent } from './updateClothing/updateClothing.component';
import { BoughtItemsComponent } from './bought-items/bought-items.component';
import { WishlistItemsComponent } from './wishlist-items/wishlist-items.component';
import { NiceToHaveItemsComponent } from './nice-to-have-items/nice-to-have-items.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent,
    LoginComponent,
    ClothingListComponent,
    ClothingFormComponent,
    ClothingDetailComponent,
    HomeComponent,
    UpdateClothingComponent,
    BoughtItemsComponent,
    WishlistItemsComponent,
    NiceToHaveItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
