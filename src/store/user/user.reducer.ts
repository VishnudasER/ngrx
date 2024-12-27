
///reducer is an impure function

import { createReducer } from "@ngrx/store";
import { userState } from "./user.state";



const _UserReducer = createReducer(userState)




export function UserReducer(state:any , action:any){

}