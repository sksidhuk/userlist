import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {

  constructor(private uService: UserService) { }
  ngAfterViewInit() {
    this.getUserDashboard();
  }

  getUserDashboard() {
    const u_email = localStorage.getItem("u_email");
    console.log("Local login email", u_email);
    let u_data = {
      u_email: u_email
    }
    this.uService.getUserData(u_data).subscribe(
      (res: any) => {
        console.log("data got", res);
        return res;
      },
      (error: any) => {
        console.log(error, "No Data found!")
      });
  }

}
