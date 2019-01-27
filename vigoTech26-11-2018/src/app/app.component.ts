// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'vigoTech';
// }

import { Component, OnInit, OnDestroy } from '@angular/core';

import {Router, NavigationEnd} from '@angular/router';  //import for scroll to top when click on router link
import {filter} from 'rxjs/operators'                   //import for scroll to top when click on router link
import  { Subscription, from } from 'rxjs';             //import for scroll to top when click on router link
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{       // The following is for scroll to top when click on router link
  subscription: Subscription;                                 
  title = 'vigoTech';

  constructor(private router: Router) {}

  ngOnInit() {
    this.subscription = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe(() => window.scrollTo(0, 0));
  
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
