


import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


import { Router } from "@angular/router";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit  {
  userDetails;
  userRole = '';
 

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );



  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog,
    private userService: UserService,
    private router: Router) {
      this.role();
    }


    
  onAddItem() {
    this.userService.printData(this.userRole);
    // this.userService.showArray();
     }


     
    role(){
      if (this.userService.isLoggedIn())
      {
        this.userService.getUserProfile().subscribe(
          res => {
            this.userDetails = res['user'];
            if (this.userDetails.roleType === 'admin')
            {
                this.userRole = 'admin';
                this.onAddItem();
              this.router.navigateByUrl('/adminprofile');
            }
            else
            {
              this.userRole = 'student';
              this.onAddItem();
              this.router.navigateByUrl('/userprofile');
            }
          },
          err => { 
            console.log(err);
            
          }
        );
      }
      else{
        this.userRole = '';
        this.onAddItem();
      }

        // if(this.userService.isAdmin())
        // {
        //   this.router.navigateByUrl('/adminprofile');
        // }
        // else if(!this.userService.isAdmin())
        // {
        //   this.router.navigateByUrl('/userprofile');
        // }
        // else
        // {
        //   this.router.navigateByUrl('/home');
        // }

    }    


  startupReg() {
    const dialogRef = setTimeout(() => this.dialog.open(startupRegDialog, {
      width: '550px',
      data: {}
    }));
  }

  login() {
    const dialogRef = this.dialog.open(boxDialog, {
      width: '550px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.role();
    });
  }

  register() {
    const dialogRef = this.dialog.open(regBoxDialog, {
      width: '550px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
 

  onLogout() {
    this.userService.deleteToken();
    this.role();
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.startupReg();
  }

}








// Login Dialog Box
@Component({
  selector: 'boxDialog',
  templateUrl: 'boxDialog.html',
  styleUrls: ['./boxDialog.css']
})
export class boxDialog implements OnInit {
  // hide = true;
  flags: string[] = ['student', 'admin'];
  model = {
    roleType: '',
    email: '',
    password: ''
  };

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  constructor(
    public dialogRef: MatDialogRef<boxDialog>, public dialog: MatDialog,
    private userService: UserService, private router: Router) { }
  userDetails;

  ngOnInit() {
    // if (this.userService.isLoggedIn())
    // // this.router.navigateByUrl('/userprofile');
    // {
    //   this.userService.getUserProfile().subscribe(
    //     res => {
    //       this.userDetails = res['user'];
    //       if (this.userDetails.roleType !== 'admin')
    //        {
    //           this.router.navigateByUrl('/userprofile');
    //        }
    //       else {
    //         this.router.navigateByUrl('/adminprofile');
    //       }
    //     },
    //     err => {
    //       console.log(err);

    //     }
    //   );
    // }
  }

  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        // this.router.navigateByUrl('/userprofile');
        this.onSubClick();
        // this.ngOnInit();
        // alert('login successfully'); 
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

  onSubClick(): void {
    this.dialogRef.close();

  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}



// Register Dialog Box
@Component({
  selector: 'regBoxDialog',
  templateUrl: 'regBoxDialog.html',
})
export class regBoxDialog {
  flags: string[] = ['student', 'admin'];
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(
    public dialogRef: MatDialogRef<regBoxDialog>, public dialog: MatDialog,
    private userService: UserService) { }



  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
        this.onSubClick();
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      roleType: '',
      fullName: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }


  onSubClick(): void {
    this.dialogRef.close();
    alert('register successfully');
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


  //edit function
  login() {
    this.onNoClick()
    const dialogRef = this.dialog.open(boxDialog, {
      width: '550px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}







// Startup Register Dialog Box
@Component({
  selector: 'startupRegDialog',
  templateUrl: 'startupRegDialog.html',
  styleUrls: ['./startupRegDialog.css']
})
export class startupRegDialog {

  constructor(
    public dialogRef: MatDialogRef<startupRegDialog>, public dialog: MatDialog, ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}







