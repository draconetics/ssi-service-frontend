import { Component, OnInit } from '@angular/core';
import {Employee} from "../../shared/employee";
import {EmployeeService} from "../../services/employee.service";
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DeleteUserComponent} from '../../dialog/delete-user/delete-user.component';
import {UploadImageUserComponent} from '../../dialog/upload-image-user/upload-image-user.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  employees: Employee[];


  displayedColumns: string[] = ['id', 'name', 'firstName', 'lastName','image','operations'];


  constructor(private employeeService: EmployeeService, private router:Router, public dialog:MatDialog) {
  }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);

    //console.log("##################");
    //console.log(this.employees);
    //this.dataSource = this.employees;
    //console.log(JSON.stringify(this.employees));
  }

  // deleteUser(employee:Employee){
  //   //this.dialog.open();
  //
  //
  //
  //   this.employeeService.deleteEmployee(employee).subscribe((data)=>{
  //     //this.router.navigate(['/users']);
  //     var rows = document.getElementById("item"+employee.id);
  //     rows.parentNode.removeChild(rows);
  //   },(error)=>{
  //     console.log(error);
  //   });
  // }

  updateUser(employee){
    this.employeeService.setter(employee);
    this.router.navigate(['/user']);
  }

  openDeleteDialog(employee:Employee) {
    //this.dialog.open(DeleteUserComponent, {width: '500px', height: '450px'});
    this.dialog.open(DeleteUserComponent, {data:{employee}});
  }

    openChangeImage(employee:Employee){
      //this.dialog.open(UploadImageUserComponent,{data:{employee}});
      this.employeeService.setter(employee);

      const dialogConfig = new MatDialogConfig();

      // dialogConfig.disableClose = true;
      // dialogConfig.autoFocus = true;
      dialogConfig.width = '500px';
      dialogConfig.height = '400px';

      dialogConfig.data = {
        id: 1,
        newImage: null
      };

      let dialog = this.dialog.open(UploadImageUserComponent, dialogConfig);
      dialog.afterClosed()
        .subscribe(response => {console.log(response);
          // let imageTmp = new Image();
          // imageTmp = document.getElementById("image"+response.id);
          // imageTmp.src = response.src;


          // var image = document.createElement("img");
          // var imageParent = document.getElementById("image"+response.id);
          // image.id = "Id";
          // image.className = "class";
          // image.src = response.src;
          // imageParent.appendChild(image);



          this.employeeService.getEmployees()
            .subscribe(employee => this.employees = employee);
          console.log(this.employees);
          // var image = document.createElement("img");
          // var imageParent = document.getElementById("image"+response.id);
          // image.id = "Idxxxxxx";
          // image.className = "class";
          // image.src = emp.image;
          // imageParent.appendChild(image);

        });
    }

    public changeImage(){
      console.log("change image !!!");
    }

}
