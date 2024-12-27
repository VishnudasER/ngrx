import { createEntityAdapter } from "@ngrx/entity";
import { UserModel, Users } from "../model/user.model";

export const userAdapter = createEntityAdapter<Users>()

export const userState:UserModel = userAdapter.getInitialState({

    isDuplicate:false
})