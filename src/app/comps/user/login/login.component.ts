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

  errors = "";
  success = "";

  ngOnInit() {

  }

  loginForm = new FormGroup({
    u_email: new FormControl(''),
    u_password: new FormControl('')
  });

  loginUser() {

    let userLoginData = this.loginForm.value;

    if (userLoginData.u_email !== '' && userLoginData.u_email !== '') {
      this.uService.authLogin(userLoginData)
        .subscribe((res: any) => {
          console.log("Login successful", res);
          this.success = "Congratulations!!!! Login Successful";
        },
          (error: any) => {
            this.errors = "Email and password are incorrect, Please try again!";
            console.error("Login Failed", error);
          });

    }

    else {
      this.errors = "Email and password are required for login";
    }

  }



}
