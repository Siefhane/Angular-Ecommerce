import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform: FormGroup = new FormGroup({
    email :new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password :new FormControl('', Validators.required)
  });
  submitloginForm(){
    console.log(this.loginform)
  }

}
