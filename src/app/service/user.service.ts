import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/contact';

  private saveUrl = "http://localhost:3000/contactsave";

  private loginAuth = 'http://localhost:3000/login';



  //User List show
  userList(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  //Login Auth
  authLogin(userLoginData: any): Observable<any> {
    console.log("Service data", userLoginData);
    return this.http.post<any>(this.loginAuth, userLoginData);
  }

  //Form Data Save in Add component
  saveUserData(formData: any): Observable<any> {
    return this.http.post(this.saveUrl, formData);
  }

  //Update user Data User List  component
  updateUserData(upDataeddata: any): Observable<any> {
    const updateUrl = `http://localhost:3000/contactupdate/${upDataeddata.id}`;
    console.log("Updated ID", upDataeddata.id);
    return this.http.put(updateUrl, upDataeddata);
  }

  //Update user Data User List  component
  updateUser(upDataeddata: any, id: any): Observable<any> {
    const updateUrl = `http://localhost:3000/contactupdate/${id}`;
    return this.http.put(updateUrl, upDataeddata);
  }


  //Localstorage get item
  getUserData(): any {
    const userData = localStorage.getItem("fname");
  }




}
