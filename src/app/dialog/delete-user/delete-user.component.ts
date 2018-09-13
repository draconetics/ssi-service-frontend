import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../shared/employee';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteUserComponent>, @Inject(MAT_DIALOG_DATA) public data:any,private employeeService:EmployeeService) {

  }

  ngOnInit() {
  }

  deleteUser(employee:Employee) {

    this.employeeService.deleteEmployee(employee).subscribe((data)=>{
      //this.router.navigate(['/users']);
      var rows = document.getElementById("item"+employee.id);
      rows.parentNode.removeChild(rows);
    },(error)=>{
      console.log(error);
    });
    this.dialogRef.close();

  }



}
