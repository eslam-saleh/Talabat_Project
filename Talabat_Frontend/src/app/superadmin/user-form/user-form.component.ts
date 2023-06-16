import { UserService } from 'src/app/ServicesAPI/UserServices/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private route:Router,
    private userSer:UserService) { }

  ngOnInit(): void {
  }
  onSubmit(f){
    //console.log(f.value);
    this.userSer.register(f.value).subscribe(res=>{
      this.route.navigate(['/admin'],{queryParams:{section:'Users'}})
      //window.location.reload();
    });
    
   
  }
}
