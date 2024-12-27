import { EntityState } from "@ngrx/entity";

export interface Users{
    name:string,
    password : string,
    email:string,
    phone:string,
    role:string,
    gender:string,
    status:boolean
}




export interface UserCredential{
    email:string,
    password : string,
    
}

export interface userInfo{
    name:string,
    password:string
    email:string,
    phone:string,
    role:string,
   
    status:boolean
}



export interface UserModel extends EntityState<Users>{

    isDuplicate:boolean
}