import {
  Component,
  OnInit
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import {
  NgxSpinnerService
} from 'ngx-spinner';
import {
  Iuser
} from 'src/app/InterfaceAPI/iuser';
import {
  IuserLogin
} from 'src/app/InterfaceAPI/IuserLogin/iuser-login';
import * as alertify from "alertifyjs";
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  AlertifyNotificationServiveService
} from 'src/app/ServicesAPI/alertifyNotificationService/alertify-notification-servive.service';
import {
  UserService
} from 'src/app/ServicesAPI/UserServices/user.service';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  img: string;
  fieldTextType: boolean;
  userLogin: IuserLogin;
  constructor(private spinner: NgxSpinnerService,
    private userServ: UserService,
    private route: Router,
    private alertifyService: AlertifyNotificationServiveService,
    private acrivatedRoute:ActivatedRoute) {
    this.userLogin = {
      email: "",
      password: null,
    }
  }



  ngOnInit(): void {
    this.img = "assets/LoginForm/bgLoginForm.jpg";

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }
  onSubmit(f: NgForm): void {
    this.userServ.logIn(f.value).subscribe(
      (data) => {
        console.log("Login success")
        this.alertifyService.showSuccess("Login Successfully", "Congurats")
        // alertify.success('Login Successfully');
        //add router navigate 
        let returnUrl=this.acrivatedRoute.snapshot
        .queryParamMap.get('returnUrl');
        this.route.navigate([returnUrl||'/']);
      },
      (error) => {
        console.log("Login fail")
        this.alertifyService.showError("There is no account registered with that email. Please enter a registered email or continue to Create an account", "Welcome")
        this.route.navigateByUrl('/Register');
      }
    );
    console.log(f);
  }

  toggleFieldTextType() {
    this.fieldTextType != this.fieldTextType;
  }
}
