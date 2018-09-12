import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/feedbackUser";
import {EmployeeService} from "../../services/employee.service";
import {Employee} from "../../shared/employee";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: User;
  newUser:Employee;

  constructor(private fb: FormBuilder, private es: EmployeeService) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.feedbackForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });

  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);

    this.newUser = new Employee();

    this.newUser.name = this.feedback.firstName+" "+this.feedback.lastName;
    this.newUser.firstName=this.feedback.firstName;
    this.newUser.lastName=this.feedback.lastName;
    this.newUser.image= null;
    this.newUser.jobPosition = "Job Position";
    this.newUser.jobCode = "123123";
    this.newUser.featured = true;
    this.newUser.jobDescription = "Job description";

    //this.es.addEmployee(<Employee>this.feedback);
    this.es.addEmployee(this.newUser);
    this.feedbackForm.reset(
      {
        firstName: '',
        lastName: ''
      }
    );
    // work around
    const form: HTMLFormElement =
      <HTMLFormElement>document.getElementById('form');
    form.reset();

  }
}//fin clase
