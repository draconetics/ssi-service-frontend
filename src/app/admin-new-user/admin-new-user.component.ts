import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {Employee} from "../shared/employee";

@Component({
  selector: 'app-admin-new-user',
  templateUrl: './admin-new-user.component.html',
  styleUrls: ['./admin-new-user.component.scss']
})

export class AdminNewUserComponent implements OnInit {

  emp:Employee;

  constructor(private employeeService: EmployeeService) {
  }
  ngOnInit() {
  }

  add(first_name: string, last_name: string): void {
    alert(first_name+" "+last_name);
  //firstName nombre de acuerdo al employeeCommand
    this.employeeService.addEmployee({firstName:first_name,lastName:last_name} as Employee)
      .subscribe(employee => {
        console.log("Employee created!!!");
      });
  }

  getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
