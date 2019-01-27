import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from "@angular/router";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  // userDetails;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private userService: UserService, private router: Router,
              private _formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.userService.getUserProfile().subscribe(
    //   res => {
    //     this.userDetails = res['user'];
    //   },
    //   err => { 
    //     console.log(err);
        
    //   }
    // );


    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  
  // onLogout(){
  //   this.userService.deleteToken();
  //   this.router.navigate(['/home']);
  // }


}
