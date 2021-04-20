import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Bug} from './Bug';


@Injectable({
  providedIn: 'root'
})
export class BugService {
  constructor(private http:HttpClient) { }
  save(bug:Bug){
    return this.http.post('http://localhost:8083/bug',bug,{headers:{"content-type":'application/json'}});
  }
  getBugs(name:string) {
    return this.http.get('http://localhost:8083/bug/'+name);
  }
  getBugsByStatus(status: string) {
    return this.http.get('http://localhost:8083/bug/status/'+status);
  }
  usendBug(bug:Bug){
    return this.http.post('http://localhost:8083/bug',bug,{headers:{"content-type":'application/json'}});
  }
}
