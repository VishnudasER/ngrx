import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../../app/service/user.service";
import { catchError, exhaustMap, map, of } from "rxjs";
import { beginLogin, beginRegister, showAlert } from "./user.action";
import { Router } from "@angular/router";


@Injectable()
export class UserEffects{


    //injecting actions and services
    constructor(private action$:Actions , private service : UserService , private router:Router){

    }

    userRegister = createEffect(()=>
    
        this.action$.pipe(
            ofType(beginRegister),
            exhaustMap((action)=>{
                return this.service.userRegistration(action.userdata).pipe(

                    map(()=>{
                        this.router.navigate(['login'])
                        return showAlert({message:"Registered succeessfully"})
                    }),
                    catchError((err)=>of(showAlert({message:"Registration failed"+err.message})))
                )
            })
        )
    
    )


    userLogin$ = createEffect(() =>
        this.action$.pipe(
          ofType(beginLogin),
          exhaustMap((action) => 
            this.service.userLogin(action.userCred).pipe(
              map((user) => {
                if (user) {
                  if (user.status) {
                    this.router.navigate(['']);
                    return showAlert({ message: 'Login successfully' });
                  } else {
                    return showAlert({ message: 'Inactive user' });
                  }
                } else {
                  return showAlert({ message: 'Invalid credentials' });
                }
              }),
              catchError((err) => of(showAlert({ message: 'Login failed: ' + err.message })))
            )
          )
        )
      );

    
}