import { Component, OnInit } from '@angular/core';
import {Employee} from "../shared/employee";
import {EmployeeService} from "../services/employee.service";

@Component({
  selector: 'app-admin-users-table-normal',
  templateUrl: './admin-users-table-normal.component.html',
  styleUrls: ['./admin-users-table-normal.component.scss']
})
export class AdminUsersTableNormalComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }
}
