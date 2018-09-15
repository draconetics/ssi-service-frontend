import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {FormBuilder, FormGroup} from '@angular/forms';
import {Employee} from '../../shared/employee';
import {EmployeeService} from '../../services/employee.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-upload-image-user',
  templateUrl: './upload-image-user.component.html',
  styleUrls: ['./upload-image-user.component.scss']
})
export class UploadImageUserComponent implements OnInit {
  newUser:Employee;
  feedbackForm: FormGroup;


  //loading: boolean = false;
  submit:boolean = true;

 @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder, private es:EmployeeService, private router:Router, public dialogRef: MatDialogRef<UploadImageUserComponent>) {
    this.createForm();
  }

  ngOnInit(){
    this.newUser = this.es.employeeSelected;

  }

  createForm() {
    this.feedbackForm = this.fb.group({
      avatar: null
    });
  }

  // onFileChange(event) {
  //   alert("change event!!");
  //   let tmp:any;
  //   let reader = new FileReader();
  //   if(event.target.files && event.target.files.length > 0) {
  //     let file = event.target.files[0];
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       //this.newUser.image = reader.result.split(',')[1];
  //       tmp = reader.result.split(',')[1];
  //     };
  //   }
  //   console.log(tmp);
  //   this.submit = false;
  // }

  selectedFile: File;
 // urlFile:string;
  imageSrc:string="";

  onFileChanged(event) {
    alert("file changed");

    var element = document.getElementById("imageContainer");
    element.parentNode.removeChild(element);


    if (event.target.files && event.target.files[0]) {
      this.selectedFile = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(this.selectedFile);
    }
    this.submit=false;
  }







  onSubmit() {

    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);

    //this.es.addEmployee(this.newUser);
    this.es.uploadImage(this.newUser,uploadData).subscribe((newUser) => {
      //console.log(newUser);
      this.dialogRef.close({id:this.newUser.id});
    //  this.router.navigate(['/users']);


    }, (error) => {
      console.log(error);
    });


    //this.router.navigate(['/users']);

    // this.feedbackForm.reset(
    //   {
    //     firstName: '',
    //     lastName: ''
    //   }
    // );
    // // work around
    // const form: HTMLFormElement =
    //   <HTMLFormElement>document.getElementById('form');
    // form.reset();
    //
    // this.es.employeeSelected = null;
    // // In a real-world app you'd have a http request / service call here like
    // // this.http.post('apiUrl', formModel)
    // setTimeout(() => {
    //   console.log(this.newUser);
    //   alert('done!');
    //   //this.loading = false;
    // }, 1000);
  }

  // clearFile() {
  //   //this.feedbackForm.get('avatar').setValue(null);
  //   this.fileInput.nativeElement.value = '';
  // }
}
