import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private uService: UserService) { }

  loginMessage = "";

  ngOnInit() {

  }

  loginForm = new FormGroup({
    u_email: new FormControl(''),
    u_password: new FormControl('')
  });

  loginUser() {

    let userLoginData = this.loginForm.value;
    if (userLoginData.u_email === '' && userLoginData.u_email === '') {
      this.loginMessage = "Email and password are required";

    }

    else {
      this.uService.authLogin(userLoginData)
        .subscribe((res: any) => {
          //console.log("Login successful", res);
          this.loginMessage = "Congratulations!!!! Login Successful";

          if (typeof window !== 'undefined' && userLoginData?.u_email) {
            try {
              localStorage.setItem("loginStatus", "true");
              localStorage.setItem("u_email", userLoginData.u_email);

            } catch (error) {
              console.error("LocalStorage error:", error);
            }

          }
          else {
            console.warn("Cannot store data, try again!");

          }

        },
          (error: any) => {
            this.loginMessage = "Invaid Credentials! Please try again";
          });
    }
  }



}
