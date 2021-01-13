import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public  dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openSearch(){
    let dialogRef=this.dialog.open(SearchComponent,{
      data:{name:"mohit"}
    },);
  }
  
}
