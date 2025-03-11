import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { UserService } from '../../../service/user.service';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../modal/user-dialog/user-dialog.component';
import { UserupdateDialogComponent } from '../modal/userupdate-dialog/userupdate-dialog.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule, FormsModule, MatInputModule, MatFormFieldModule, MatAutocompleteModule, MatTableModule, MatPaginator],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit, AfterViewInit {

  allNames: string[] = ["Rohit", "Anvi", "Sandeep", "Manu", "Romy"];
  names = new FormControl('');
  autoCompleteNames!: Observable<string[]>;

  //userList Columns Data
  displayedColumns: string[] = ['name', 'email', 'phone', 'action'];
  userList: any[] = [];
  dataSource = new MatTableDataSource(this.userList);

  constructor(private serviceData: UserService, public dialog: MatDialog) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.searchNames();
    //Save Data

  }


  ngAfterViewInit() {
    this.listData();
  }

  //User List
  listData() {
    this.serviceData.userList().subscribe((res: any) => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator; // Assign paginator after data is set
    })
  }


  // View Modal Dialog
  viewDialog(user: any) {
    const dialogData = this.dialog.open(UserDialogComponent, {
      data: user,
      width: '500px'
    });

    //Show the updated data in parent Component
    dialogData.afterClosed().subscribe((updatedData: any) => {
      console.log('Need to update:', updatedData);
      if (updatedData && updatedData.id) {
        //send data to user.service
        this.serviceData.updateUserData(updatedData).subscribe(
          (response: any) => {
            console.log('Updated Successful:', response);
          },
          (error: any) => {
            console.error('Update Failed:', error);

          });
      }
    });
  }

  //Update Modal Dialog
  updateDialog(user: any) {
    const dialogData = this.dialog.open(UserupdateDialogComponent, {
      data: user,
      width: '500px'
    });

    dialogData.afterClosed().subscribe((res: any) => {
      // console.log("Parent Data", res);
      this.listData();
    });
  }




  //Input Autosearch
  searchNames() {
    this.autoCompleteNames = this.names.valueChanges.pipe(
      startWith(''), // it will check from empty input
      map((value: any) => {
        //return this.filters(value || '') // filter names based on input
        const filterValue = value.toLowerCase();
        return this.allNames.filter((name: any) => {
          return name.toLowerCase().includes(filterValue);
        }
        );
      })
    );
  }



  //filter func
  private filters(value: string): string[] {

    const filterValue = value.toLowerCase();
    return this.allNames.filter((name: any) => {
      return name.toLowerCase().includes(filterValue);
    }
    );

  }


}
