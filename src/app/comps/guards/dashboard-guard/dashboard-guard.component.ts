import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router';

@Component({
  selector: 'app-dashboard-guard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-guard.component.html',
  styleUrl: './dashboard-guard.component.css'
})
export class DashboardGuardComponent implements OnInit {

  router = "";
  navigate = "";

  ngOnInit() {
    this.canActivate();
  }

  canActivate() {
    if (localStorage.getItem("loginKey") === "true") {
      console.log("Welcome Dashboard");
    } else {
      localStorage.setItem("loginKey", "false");

    }
  }
}
