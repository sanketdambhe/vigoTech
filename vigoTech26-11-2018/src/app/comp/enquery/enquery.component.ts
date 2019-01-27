import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserService } from '../../services/user.service';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-enquery',
  templateUrl: './enquery.component.html',
  styleUrls: ['./enquery.component.css']
})
export class EnqueryComponent {
  toppings = new FormControl();
  toppingList: string[] = ['Web Design', 'Web Development', 'Adv Web Design/Development',  'Android Development'];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();


  flags: string[] = ['student', 'admin'];
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;



  constructor( private userService: UserService) { }




    onSubmit(form: NgForm) {
      this.userService.postEnquiry(form.value).subscribe(
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
      alert('register successfully');
    }

}


// export class SelectMultipleExample {

// }