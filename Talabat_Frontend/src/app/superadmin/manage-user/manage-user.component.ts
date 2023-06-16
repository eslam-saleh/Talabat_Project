import { Router } from '@angular/router';
import { UserService } from 'src/app/ServicesAPI/UserServices/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  users$;

  constructor(private userSer:UserService,
    private route:Router) {
    this.users$=this.userSer.getAllUsers();
   }

  ngOnInit(): void {
  }
  delete(id){
    this.userSer.delete(id).subscribe(res=>{
      window.location.reload();
      //this.route.navigate(['/admin']);
    })
  }

}
