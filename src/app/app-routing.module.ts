import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrederMasterComponent } from './Components/oreder-master/oreder-master.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  // {path: 'Main',component:MainLayoutComponent,children:[
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/Products', pathMatch: 'full' }, // Default path
      { path: 'AbutUs', component: AboutUsComponent },
      // {path: 'Home',component: HomeComponent},
      { path: 'Products', component: ProductsComponent },
      { path: 'Products/:pid', component: ProductDetailsComponent },
      { path: 'Order', component: OrederMasterComponent },
      // {path: 'NewProduct',component:AddProductComponent}
    ],
  },
  // {path:'Register',component:UserRegisterComponent},
  { path: '**', component: NotFoundComponent }, //wildcard path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
