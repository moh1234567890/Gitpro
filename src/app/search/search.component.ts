import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GithubService } from '../github.service';
export interface GitSearchUsers{
  id:number;
  login:string;
  avatarurl:string;
  url:string;
  createdat:string;
  
}
const  ELEMENT_DATA: GitSearchUsers[] = [];
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
result:any=[];
  constructor(private obj:GithubService,@Inject(MAT_DIALOG_DATA) public data:any) { }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }
  displayedColumns: string[] = ['id', 'login', 'avatarurl', 'url','createdat'];
dataSource= new  MatTableDataSource<GitSearchUsers>(ELEMENT_DATA);
   

  ngOnInit(): void {
    
    
     
   
  }
  onsearch(search:NgForm){
    this.dataSource = new MatTableDataSource();
    
    var searchValue=search.controls.search.value;
    console.log(searchValue)
    this.obj.getGithubUser(searchValue).subscribe(data=>{
      console.log(data)
      this.result=data
      console.log(this.result)
      this.dataSource.data = data;
      console.log(this.dataSource.data);
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


}
