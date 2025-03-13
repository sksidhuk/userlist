import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3002/contact';

  private saveUrl = "http://localhost:3002/contactsave";

  private loginAuth = 'http://localhost:3002/login';
  private dashboardUrl = "http://localhost:3002/dashboard";


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
    const updateUrl = `http://localhost:3002/contactupdate/${upDataeddata.id}`;

    return this.http.put(updateUrl, upDataeddata);
  }

  //Update user Data User List  component from Modal
  updateUser(upDataeddata: any, id: any): Observable<any> {
    const updateUrl = `http://localhost:3002/contactupdate/${id}`;
    return this.http.put(updateUrl, upDataeddata);
  }


  //Localstorage get item for User Dashboard Page
  getUserData(u_email: any): Observable<any> {
    console.log("Service email:", u_email);
    return this.http.post<any>(this.dashboardUrl, u_email);
  }


  // logoutUser() {
  //   const loginKey = localStorage.getItem('loginKey');
  //   console.log(loginKey);
  // }



}
