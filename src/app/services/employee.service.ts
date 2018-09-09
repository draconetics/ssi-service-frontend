///<reference path="../../../node_modules/@angular/core/src/di/injectable.d.ts"/>
import {Injectable} from '@angular/core';
import {Employee} from '../shared/employee';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import {baseURL} from "../shared/baseurl";
import {catchError, map, tap} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {of} from "rxjs/internal/observable/of";



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }
/*  getEmployees(): Observable<Employee[]> {
    return Observable.of(EMPLOYEES).delay(2000);
  }

  getEmployee(id: number): Observable<Employee> {
    return Observable.of(EMPLOYEES.filter(employee => employee.id === id)[0]).delay(2000);
  }

  getFeaturedEmployee(): Observable<Employee> {
    return Observable.of(EMPLOYEES.filter((employee) => employee.featured)[0]).delay(2000);
  }*/

  getEmployees(): Observable<Employee[]> {
    return <Observable<Employee[]>> this.http.get(baseURL + 'employees');
  }

  getEmployee(id: number): Observable<Employee> {
    return <Observable<Employee>> this.http.get(baseURL + 'items/' + id);
  }

  getFeaturedEmployee(): Observable<Employee> {
    return <Observable<Employee>> this.http.get(baseURL + 'items?featured=true');
  }

  getEmployeeIds(): Observable<number[]> {
    return <Observable<number[]>> this.http.get(baseURL + 'items')
      .pipe(map(employees => (<Employee[]>employees).map(employee => employee.id)));
  }



  addEmployee(employee: Employee): Observable<Employee> {
    console.log("esto le estoy enviando ");
    console.log(employee);
    return this.http.post<Employee>(baseURL+"employees", employee, httpOptions).pipe(
      tap((employee: Employee) => console.log(`Added employee with id ${employee.id}!`)),
      catchError(this.handleError<Employee>('addEmployee'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error, `Operation: ${operation}`);

      return of(result as T);
    }
  }


}
