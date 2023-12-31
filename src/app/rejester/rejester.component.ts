import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators, FormBuilder } from '@angular/forms';
import { checkpass } from './confirmpass.validator';

@Component({
  selector: 'app-rejester',
  templateUrl: './rejester.component.html',
  styleUrls: ['./rejester.component.css']
})
export class RejesterComponent {
  registerform: FormGroup;
  constructor(private fb: FormBuilder){
    this.registerform = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    Phone: ['', [Validators.required, Validators.pattern( /^(010|011|012|015)\d{8}$/)]],   
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@*%$#])[a-zA-Z\\d@*%$#]+$')
    ]],
    confirmpassword: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@*%$#])[a-zA-Z\\d@*%$#]+$'),
    ]],}
   ,{validator: checkpass('password', 'confirmpassword')}
  )
    
  }
}   
