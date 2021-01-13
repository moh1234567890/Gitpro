import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
   today:string="";
  constructor() { }

  ngOnInit(): void {

    let today = new Date().toLocaleDateString()

console.log(today);
  }
  

}
