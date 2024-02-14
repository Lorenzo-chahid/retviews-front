
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ClothingListComponent } from './clothingList/clothingList.component';
import { ClothingFormComponent } from './clothingForm/clothingForm.component';
import { ClothingDetailComponent } from './clothingDetail/clothingDetail.component';
import { UpdateClothingComponent } from './updateClothing/updateClothing.component';
import { BoughtItemsComponent } from './bought-items/bought-items.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard',component:ClothingListComponent},
  { path: 'login', component: LoginComponent },
  { path: "clothing", component: ClothingListComponent},
  { path: 'new', component: ClothingFormComponent },
  { path: 'detail/:id', component: ClothingDetailComponent},
  {path: 'bought', component: BoughtItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
