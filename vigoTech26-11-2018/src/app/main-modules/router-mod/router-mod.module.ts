import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../../comp/home/home.component';
import {GallaryComponent} from '../../comp/gallary/gallary.component';
import {AboutusComponent} from '../../comp/aboutus/aboutus.component';
import {TechnologiesComponent} from '../../comp/technologies/technologies.component';
import {PackagesComponent} from '../../comp/packages/packages.component';
import {TimingComponent} from '../../comp/timing/timing.component';
import {TestimonialComponent} from '../../comp/testimonial/testimonial.component';
import {EnqueryComponent } from '../../comp/enquery/enquery.component';
import { AdminProfileComponent } from '../../comp/admin-profile/admin-profile.component';


import { UserProfileComponent } from '../../comp/user-profile/user-profile.component';//auth
import { AuthGuard } from '../../auth/auth.guard';//auth
import { AuthUserGuard } from '../../auth/auth-user.guard';//auth
import { TestcompComponent } from '../../testcomp/testcomp.component';

const mainRoute: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},  
 
  { path: 'home' , component: HomeComponent},
  { path: 'enquery', component: EnqueryComponent},
  {path: 'gallary', component: GallaryComponent},
  {path: 'aboutus', component: AboutusComponent},
  { path: 'test', component: TestcompComponent },
  // {path: 'technologies', component: TechnologiesComponent},
  // {path: 'packages', component: PackagesComponent},
  // {path: 'timing', component: TimingComponent},
  // {path: 'testimonials', component: TestimonialComponent},

  {path: 'userprofile', component: UserProfileComponent,canActivate:[AuthUserGuard]},
  {path: 'adminprofile', component: AdminProfileComponent,canActivate:[AuthGuard]},
  // {path: 'userprofile', component: UserProfileComponent},
  // {path: 'adminprofile', component: AdminProfileComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},

  
  {path: '**' , redirectTo: '/home'} 
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(mainRoute)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RouterModModule { }
