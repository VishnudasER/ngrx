import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserCredential } from '../../../store/model/user.model';
import { Store } from '@ngrx/store';
import { beginLogin } from '../../../store/user/user.action';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private builder : FormBuilder , private store:Store){

  }

  loginform = this.builder.group({
    userName:this.builder.control("", Validators.required),
    password: this.builder.control("",Validators.required)
  })

  proceedLogin(){
    if(this.loginform.valid){

      const _obj:UserCredential ={
        email:this.loginform.value.userName as string,
        password:this.loginform.value.password as string

      }
      console.log("dfdf",_obj)

      this.store.dispatch(beginLogin({userCred:_obj}))
    }
  }

}
