import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { FinalComponent } from './components/final/final.component';
import { CartComponent } from './components/cart/cart.component';
import { SectionTwoComponent } from './components/cart/section-two/section-two.component';
import { SectionThreeComponent } from './components/cart/section-three/section-three.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product-description/:id',
    component: ProductDescriptionComponent,
  },
  {
    path: 'final',
    component: FinalComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'ship',
    component: SectionTwoComponent,
  },
  {
    path: 'payment',
    component: SectionThreeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
