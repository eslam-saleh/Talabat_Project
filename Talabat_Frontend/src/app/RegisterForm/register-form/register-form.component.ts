import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Iuser } from 'src/app/InterfaceAPI/iuser';
import * as alertify from "alertifyjs";
import { AlertifyNotificationServiveService } from 'src/app/ServicesAPI/alertifyNotificationService/alertify-notification-servive.service';
import { UserService } from 'src/app/ServicesAPI/UserServices/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
user:Iuser;
  constructor(private spinner: NgxSpinnerService,private userServ:UserService,private router:Router,private alertifyService : AlertifyNotificationServiveService) {
    this.user={
      // id:null,
      fname:"" ,
	    lname:"",
	    email:"" ,
      password:null,
      mobile:null,
	state:"",
	area:"",
	street:"",
     	role:""
    }
  }

  ngOnInit(): void {
    // method insert to save userDB
    // this.userServ.insertUserDb(this.user).subscribe(
    //   (data)=>console.log(data),
    //   (error)=>console.log(error)
    // );


    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }
log(x):void{
  console.log(x);

}
onSubmit(f:NgForm):void{
  debugger
  // // method insert to save userDB
  console.log(f.value)
  this.userServ.register(f.value).subscribe(
    (data)=>console.log(data),
    (error)=>console.log(error)
  );
  console.log(f);
  // const user = this.userServ.authUser(f.value)
  if(this.user){
    localStorage.setItem('token',this.user.email)
    console.log("register success")
    this.alertifyService.showSuccess("Register Successfully","Congratulation")
    this.router.navigateByUrl('/');
    // alertify.success('Success message');
    //add router navigate 
  }
  else{
    console.log("register fail")
    this.alertifyService.showError("Complete Your Data","Unfortunality")
   // alertify.error('Error message');
  }
}
}
