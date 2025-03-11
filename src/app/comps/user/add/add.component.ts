import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, MatTableModule, MatPaginator],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})



export class AddComponent implements OnInit {

  userList: any[] = [];
  dataSource = new MatTableDataSource(this.userList);
  passwordmismatch = "";
  constructor(private serviceData: UserService) { }

  ngOnInit() {

  }
  userForm = new FormGroup({
    u_name: new FormControl('', Validators.required),
    u_email: new FormControl('', Validators.required),
    u_phone: new FormControl('', Validators.required),
    u_message: new FormControl('', Validators.required),
    u_password: new FormControl('', Validators.required),
    u_cpassword: new FormControl('', Validators.required)
  });

  displayedColumns: string[] = ['name', 'email', 'phone', 'message'];


  //Save User Data
  submitForm(): void {
    let val = this.userForm.value;

    if (this.userForm.valid) {

      //Table Data Display
      if (this.userForm.value.u_password === this.userForm.value.u_cpassword) {
        this.userList?.push(val);
        this.dataSource.data = [...this.userList];
        this.serviceData.saveUserData(this.userForm.value).subscribe((res: any) => {
          console.log("Data Sent", res);
        },
          (error: any) => {
            console.error("Data Error", error);
          })
      }
      else {
        this.passwordmismatch = "Password does not match";
      }

    }
    else {
      console.log('Form is Invalid');
    }


  }





}
