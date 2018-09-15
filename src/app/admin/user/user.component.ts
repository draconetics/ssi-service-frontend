import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/feedbackUser';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../shared/employee';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: User;
  newUser: Employee;

  constructor(private fb: FormBuilder, private es: EmployeeService, private router: Router) {

    if (es.employeeSelected == null) {
      this.createForm();
    } else {
      this.createFormByUser(es.employeeSelected);
    }

  }

  ngOnInit() {
    this.newUser = this.es.employeeSelected;
  }

  private createForm() {

    this.feedbackForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });

  }

  private createFormByUser(employeeSelected: Employee) {

    this.feedbackForm = this.fb.group({
      firstName: [employeeSelected.firstName, Validators.required],
      lastName: [employeeSelected.lastName, Validators.required],
    });

  }



  onSubmit(){
    this.feedback = this.feedbackForm.value;
    console.log('estoes el feedback');
    console.log(this.feedback);

    if(this.newUser == null)
      this.newUser = new Employee();


    this.newUser.firstName = this.feedback.firstName;
    this.newUser.lastName = this.feedback.lastName;


    //this.es.addEmployee(this.newUser);
    this.es.addEmployee(this.newUser).subscribe((newUser) => {
      console.log(newUser);
      this.router.navigate(['/users']);
    }, (error) => {
      console.log(error);
    });


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

    this.es.employeeSelected = null;
  }
}//fin clase
