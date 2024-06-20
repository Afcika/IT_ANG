import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartpageComponent } from './cartpage/cartpage.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'cart',
  component: CartpageComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
