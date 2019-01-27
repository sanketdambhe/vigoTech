import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    roleType: '',
    fullName: '',
    email: '',
    password: ''
  };



  role;
  printData(data) {
    // console.log(data);
    this.role = (data);
    this.isAdmin();
    console.log(this.role);  
  }

isAdmin(){
  if(this.isLoggedIn()) {
if(this.role === 'admin') {
    console.log('ha admin ahe');
    return true; }
  else {
    console.log('ha user ahe');
    return false; }
   }
 else{
   this.role = '';
   return false;}
}





  

  

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) {}

 
  
  postEnquiry(user: User){
    return this.http.post(environment.apiBaseUrl+'/postenquiry',user,this.noAuthHeader);
  }


  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
  }


  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }


  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

 
  // isStudent(){
  //   if(this.isLoggedIn()){
  //     this.getUserProfile().subscribe(
  //       res =>{
  //         this.userDetails = res['user'];
  //          this.userRole = this.userDetails.roleType;
  //       },
  //       err => {
  //            console.log(err);
  //       }
        
  //     );
  
  //     if (this.userRole === 'student') {
  //       return true;
  //     }
  //     else
  //     {
  //       return false;
  //     }
  //   }
  //   else{
  //     return false
  //   }
  // }

  // isAdmin(){
  //   if(this.isLoggedIn()){
  //     this.getUserProfile().subscribe(
  //       res =>{
  //         this.userDetails = res['user'];
  //          this.userRole = this.userDetails.roleType;
  //       },
  //       err => {
  //            console.log(err);
  //       }
        
  //     );
  
  //     if (this.userRole === 'admin') {
  //       return true;
  //     }
  //     else
  //     {
  //       return false;
  //     }
  //   }
  //   else{
  //     return false
  //   }
  // }



}
