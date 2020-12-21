import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { RegisterComponent } from './item-preview/register/register.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path: 'home', component:HomeComponent,
// children: [ 
//   path: '/', fragment="contact", component:ContactFormComponent
// ] 
  },
// children: [
    // { path: 'contact', component: ContactFormComponent},
    // { path: 'shop', component: IntroShopComponent },

// ]

  // },
{ path: 'about', component: AboutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  { path: 'item-preview', component: ItemPreviewComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'checkout', component: CheckoutFormComponent},
  { path: 'item-preview/register', component: RegisterComponent},
  { path: 'notfound', component: NotFoundComponent},
  { path: '**', redirectTo: '/notfound' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
