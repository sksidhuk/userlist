import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  // num: any = [2, 3];

  ngOnInit() {

    let num: any = [2, 3];

    let newdata = num.map((item: any) => {
      return item * 3;
    })

    console.log(newdata);


  }

}
