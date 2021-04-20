import { Component, OnInit } from '@angular/core';
import { BugService } from '../bug.service';
import { Bug } from '../Bug';

@Component({
  selector: 'app-update-bug',
  templateUrl: './update-bug.component.html',
  styleUrls: ['./update-bug.component.css']
})
export class UpdateBugComponent implements OnInit {
title:String="UpdateBug";
bug:Bug=new Bug();
bugArray:any;
  constructor(private bugService:BugService) { }
  usendBug(){
    const promise=this.bugService.usendBug(this.bug);
    promise.subscribe(response =>{
      console.log(response);
      this.bugArray=response;
      alert('Bug Updated..')
      this.bugArray.push(Object.assign({},this.bug));

    },
    error=>{
      console.log(error);
      alert("Error !! : "+error.headers.get("error"))
    })
  }

  ngOnInit(): void {
  }

}
