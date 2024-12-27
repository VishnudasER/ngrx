import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCredential, userInfo, Users } from '../../store/model/user.model';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  APIBaseUrl = "http://localhost:3000/user"


  userRegistration(userData: Users) {

    return this.http.post(this.APIBaseUrl, userData)
  }


  // userLogin(userdata:UserCredential){
  //   //after get we give userInfo[] which mean while getting it is "returing" things that is inside the userinfo
  //   return this.http.get<userInfo[]>(this.APIBaseUrl+"?email="+userdata.email+"&password="+userdata.password)
  // }

  userLogin(userdata: UserCredential): Observable<userInfo | null> {

    //after get we give userInfo[] which mean while getting, it is "returing" things that is inside the userinfo
    return this.http.get<userInfo[]>(`${this.APIBaseUrl}?email=${userdata.email}`).pipe(
      map(users => {
        const user = users.find(u => u.password === userdata.password);
        if (user) {
          return user;
        } else {
          console.log("invalid credential")
          throw new Error('Invalid credentials');
        }
      }),
      catchError(() => of(null)) // Return null if invalid credentials
    );
  }



  // duplicateUser(userEmail : string){
  //   return this.http.get<userInfo[]>(`${this.APIBaseUrl}?email=${userdata.email}`)

  // }



}
