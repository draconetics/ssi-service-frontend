import { Component, OnInit } from '@angular/core';
import {Employee} from "../../shared/employee";
import {EmployeeService} from "../../services/employee.service";

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
  // employees = [{
  //     id:2,
  //     name:"mario flores",
  //     firstName:"mario",
  //     lastName:"flores",
  //     image:null
  // }];


  displayedColumns: string[] = ['id', 'name', 'firstName', 'lastName','image','operations'];


  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);

    //console.log("##################");
    //console.log(this.employees);
    //this.dataSource = this.employees;
    //console.log(JSON.stringify(this.employees));
  }

}
