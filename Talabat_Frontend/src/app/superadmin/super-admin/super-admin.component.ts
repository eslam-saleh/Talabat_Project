import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  section;
  sectionLst=['Users','Orders'];
  constructor(private route:ActivatedRoute) {
    this.route.queryParamMap.subscribe(params=>{
      this.section=params.get('section');
    })
   }

  ngOnInit(): void {
  }

}
