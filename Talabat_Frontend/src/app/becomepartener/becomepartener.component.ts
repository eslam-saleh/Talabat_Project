import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-becomepartener',
  templateUrl: './becomepartener.component.html',
  styleUrls: ['./becomepartener.component.css']
})
export class BecomepartenerComponent implements OnInit {
image;
contactRoleArr:string[];
/*form = new FormGroup(
  {phoneNumber:new FormControl('',Validators.required)
});*/
  constructor() { 
   
  }

  ngOnInit(): void {
    this.contactRoleArr=["Owner","Partner"];
    
  }
  submit(f):void{
    console.log(f);
  }
}
