import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { XlsxExporterService } from 'mat-table-exporter';
import * as XLSX from 'xlsx';

import { GithubService } from '../github.service';
export interface GitUsers{
  id:number;
  login:string;
  avatarurl:string;
  url:string;
  type:string;
  
}
const  ELEMENT_DATA: GitUsers[] = [];
  


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private obj:GithubService) {
  
    

  
   }
   

   fileName="gituser.xlsx"
  result:any=[];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }
  displayedColumns: string[] = ['id', 'login', 'avatarurl', 'url','type'];
dataSource= new  MatTableDataSource<GitUsers>(ELEMENT_DATA);
   
  

  

 

  ngOnInit():void {
    this.dataSource = new MatTableDataSource(); 
    
      this.obj.getGithub().subscribe(data=>{
        console.log(data)
        this.result=data
        console.log(this.result)
        this.dataSource.data = data; 
       return data;
      });
       
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  exportexcel():void{
    let element=document.getElementById("excel-table");
    const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element);
  
    const wb:XLSX.WorkBook=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,"Sheet1");
    XLSX.writeFile(wb,this.fileName);
  
  }

  

}
