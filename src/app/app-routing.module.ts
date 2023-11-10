import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogdetailComponent } from './pages/blogdetail/blogdetail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { PropertiesdetailsComponent } from './pages/propertiesdetails/propertiesdetails.component';
import { PostComponent } from './pages/post/post.component';
import { PlansComponent } from './pages/plans/plans.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent 
  },
  {
    path:'blog',
    component: BlogComponent
  },
  {
    path:'planning',
    component: PlanningComponent
  },
  {
    path:'blog-details',
    component: BlogdetailComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'property',
    component: PropertiesComponent
  },
  {
    path:'property-details',
    component: PropertiesdetailsComponent
  },
  {
    path:'post-news',
    component: PostComponent
  },
  {
    path: 'plans',
    component: PlansComponent
  },
  { path: 'login', component: LoginComponent },  
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
