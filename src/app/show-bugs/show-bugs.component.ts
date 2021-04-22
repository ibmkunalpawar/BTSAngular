import { getNumberOfCurrencyDigits } from '@angular/common';
import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bug } from '../Bug';
import { BugService } from '../bug.service'
@Component({
  selector: 'app-show-bugs',
  templateUrl: './show-bugs.component.html',
  styleUrls: ['./show-bugs.component.css']
})
export class ShowBugsComponent implements OnInit {
  title: string = "show bugs";
  bug: Bug = new Bug();
  bugArray: any;
  constructor(private bugService: BugService) { };
  getBugs(name: string) {
    const observable = this.bugService.getBugs(name);
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = response;
      if (this.bugArray[0] == undefined) {
        return alert("No Data Found");
      }
    });

  }

  deleteBug(id:number, index:number){
    const observable = this.bugService.delete(id);
    observable.subscribe(response=> this.bugArray.splice(index,1))
    alert("Bug Deleted Successfully");
  }

  getBugByNameAndStatus(name:string,status: string)
  {
    const observable = this.bugService.getBugByNameAndStatus(name,status);
    observable.subscribe(response => {
      console.log(response); this.bugArray = response;
      if (this.bugArray[0] == undefined) {
        return alert("No Data found for this input name and STATUS");
      }
    },
      error => {
        console.log(error);
        if (!error.ok)
          alert("Error !! : " + error.headers.get("error"))
        else {
          alert('..');
        }
      });
  }

  getBug(name:string,status: string)
  {
    if(name&&status)
    {
      this.getBugByNameAndStatus(name,status);
    }
    else if(name&&!status){
    this.getBugs(name);
    }
    else if(!name&&status)
    {
      this.getBugsByStatus(status);
    }
    else{
this.getBugs('');
    }
  }
  getBugsByStatus(status: string) {


    const observable = this.bugService.getBugsByStatus(status);
    observable.subscribe(response => {
      console.log(response); this.bugArray = response;
      if (this.bugArray[0] == undefined) {
        return alert("No Data Found");
      }
    },
      error => {
        console.log(error);
        if (!error.ok)
          alert("Error !! : " + error.headers.get("error"))
        else {
          alert('..');
        }
      });
  }


  ngOnInit(): void {
    this.bug.status='';
    this.bug.name='';
    const observable = this.bugService.getBugs('');
    observable.subscribe(response => {
      this.bugArray = response;
      if (this.bugArray[0] == undefined) {
        return alert("No Records available  currently from server");
      }
    });
  }

}
