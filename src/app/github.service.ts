import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { GitUsers } from 'src/gituser';
import { GitSearchUsers } from './search/search.component';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }
  public getGithub():Observable<GitUsers[]>{
   return  this.http.get<GitUsers[]>("https://api.github.com/users");
    
   
  }
  public getGithubUser(value:any):Observable<GitSearchUsers[]>{
    console.log(value);
    return  this.http.get<GitSearchUsers[]>("https://api.github.com/users/moh1234567890");
     
    
   }
}
