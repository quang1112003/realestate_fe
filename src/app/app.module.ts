import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { PropertiesdetailsComponent } from './pages/propertiesdetails/propertiesdetails.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogdetailComponent } from './pages/blogdetail/blogdetail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostComponent } from './pages/post/post.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PlansComponent } from './pages/plans/plans.component';
import { PricingTableComponent } from './pages/plans/pricing-table/pricing-table.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    SliderComponent,
    PropertiesdetailsComponent,
    PropertiesComponent,
    BlogComponent,
    BlogdetailComponent,
    ContactComponent,
    PostComponent,
    CheckoutComponent,
    PlansComponent,
    PricingTableComponent,
    PlanningComponent,
    RegisterComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
