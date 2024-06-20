import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from  '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CartmainComponent } from './cartmain/cartmain.component';
import { HomeComponent } from './Home/Home.component';
import { CartitemsComponent } from './cartitems/cartitems.component';



@NgModule({
  declarations: [												
    AppComponent,
      HeaderComponent,
      MainComponent,
      CategoriesComponent,
      FooterComponent,
      CartpageComponent,
      CartmainComponent,
      HomeComponent,
      CartitemsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
