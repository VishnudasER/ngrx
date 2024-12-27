import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { beginRegister, showAlert } from '../../../store/user/user.action';
import { Users } from '../../../store/model/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  constructor(private builder: FormBuilder, private store: Store) {

  }

  registerForm = this.builder.group({
    name: this.builder.control("", Validators.compose([Validators.required, Validators.minLength(5)])),
    password: this.builder.control("", Validators.compose([Validators.required])),
    conpassword: this.builder.control("", Validators.compose([Validators.required])),
    email: this.builder.control("", Validators.compose([Validators.required])),
    phone: this.builder.control("", Validators.compose([Validators.required])),
    gender: this.builder.control("male", Validators.compose([Validators.required])),
  })


  proceedRegister() {
    if (this.registerForm.valid) {


      if (this.registerForm.value.password === this.registerForm.value.conpassword) {


        const _userObj: Users = {
          name: this.registerForm.value.name as string,
          password: this.registerForm.value.password as string,
          email: this.registerForm.value.email as string,
          phone: this.registerForm.value.phone as string,
          role: "user",
          gender: this.registerForm.value.gender as string,
          status: true
        }

        console.log("jjj",_userObj)
        ///dipatching the beginregister action
        this.store.dispatch(beginRegister({ userdata: _userObj }))

      } else {
        console.log("pasdd not match")
        this.store.dispatch(showAlert({ message: "Password mismatch" }))
      }
    }
  }

}
