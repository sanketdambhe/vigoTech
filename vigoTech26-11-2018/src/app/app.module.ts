import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UiSwitchModule } from 'ngx-toggle-switch';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LayoutModule } from '@angular/cdk/layout';//navbar import
import { MatToolbarModule, 
         MatButtonModule, 
         MatSidenavModule, 
         MatIconModule, 
         MatListModule,
         ErrorStateMatcher,
         ShowOnDirtyErrorStateMatcher,
         MatRadioButton,
         MatRadioGroup,
         MatRippleModule,
         MatHorizontalStepper,
         MatStep,
         MatStepHeader,
         MatVerticalStepper,
         MatStepLabel,
         } from '@angular/material';//navbar import

import { NavigationBarComponent, boxDialog, regBoxDialog, startupRegDialog } from './navigation-bar/navigation-bar.component';//navbar import
import { HomeComponent } from './comp/home/home.component';//component Home
import { GallaryComponent } from './comp/gallary/gallary.component';//component Gallary
import { FooterComponent } from './comp/footer/footer.component';//component Footer
import { AboutusComponent } from './comp/aboutus/aboutus.component';//component Aboutus
import { TimingComponent  } from './comp/timing/timing.component' ; 
import { TechnologiesComponent } from './comp/technologies/technologies.component';
import { PackagesComponent } from './comp/packages/packages.component';
import { TestimonialComponent } from './comp/testimonial/testimonial.component';
import { EnqueryComponent } from './comp/enquery/enquery.component';
import { NgMarqueeModule } from 'ng-marquee';
import { MaterialModModule } from './main-modules/material-mod/material-mod.module';
import { RouterModModule } from './main-modules/router-mod/router-mod.module';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';



// built-in
import { RouterModule } from '@angular/router';//auth
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';//auth
//routes
import { UserProfileComponent } from './comp/user-profile/user-profile.component';//auth
import { UserService } from './services/user.service';//auth
//other
import { AuthGuard } from './auth/auth.guard';//auth
import { AuthUserGuard } from './auth/auth-user.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminProfileComponent } from './comp/admin-profile/admin-profile.component';
import { TestcompComponent } from './testcomp/testcomp.component';//auth






@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    GallaryComponent,
    FooterComponent,
    AboutusComponent,
    TimingComponent,
    TechnologiesComponent,
    PackagesComponent,
    TestimonialComponent,
    boxDialog,
    regBoxDialog,
    startupRegDialog,
    MatRadioButton,
    MatRadioGroup,
    EnqueryComponent,
    
    UserProfileComponent,//auth
    AdminProfileComponent,//auth

    MatHorizontalStepper,
    MatVerticalStepper,
    MatStep,
    MatStepHeader,
    MatStepLabel,
    TestcompComponent
  
  
  ],

  imports: [
    BrowserModule,
    UiSwitchModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModModule,
    RouterModModule,
    FormsModule,
    NgMarqueeModule,
    MatRippleModule,
    
    
    BrowserModule,//auth
    FormsModule,//auth
    // RouterModule.forRoot(appRoutes),//auth
    HttpClientModule//auth
  ],

  providers: [UserService,AuthGuard,AuthUserGuard,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    {provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi: true},

  ],
  entryComponents: [ boxDialog, regBoxDialog, startupRegDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
