import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../../service/user.service';

@Component({
  selector: 'app-userupdate-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatDialogModule],
  templateUrl: './userupdate-dialog.component.html',
  styleUrl: './userupdate-dialog.component.css'
})
export class UserupdateDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserupdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private uservice: UserService
  ) { }

  modalForm: any

  ngOnInit() {
    this.formDataInit();
  }
  formDataInit() {
    this.modalForm = new FormGroup({
      user_name: new FormControl(this.data.name),
      user_email: new FormControl(this.data.email),
      user_phone: new FormControl(this.data.phone),
    })
  }


  //Update the User data and send to Parent component using dialogRef
  updateDialog() {
    this.dialogRef.close(this.modalForm.value);
    // console.log("Id:", this.data.id);
    this.uservice.updateUser(this.modalForm.value, this.data.id).subscribe(
      (response: any) => {
        console.log("Data Updated Successfully");
      },
      (error: any) => {
        console.log("Error in Updating Data");
      })

  }

  closeDialog() {
    this.dialogRef.close();
  }

}

