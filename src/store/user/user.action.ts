import { createAction, props } from "@ngrx/store"
import { UserCredential, Users } from "../model/user.model"


export const BEGIN_REGISTER = '[auth] begin register'
export const BEGIN_LOGIN = '[auth] begin login'
export const DUPLICATE_USER =  '[auth] duplicate user'
export const DUPLICATE_USER_SUCCESS =  '[auth] duplicate user success'


export const beginRegister = createAction(BEGIN_REGISTER , props<{userdata:Users}>())

export const beginLogin = createAction(BEGIN_LOGIN , props<{userCred:UserCredential}>())

export const duplicateUser = createAction(DUPLICATE_USER , props<{userEmail:string}>())

export const duplicateUserSUc = createAction(DUPLICATE_USER_SUCCESS , props<{isDuplicate:boolean}>())

export const showAlert = createAction(
    '[Alert] Show Alert',
    props<{ message: string }>()
  );