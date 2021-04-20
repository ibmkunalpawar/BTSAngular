import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import {BugService} from '../bug.service'

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.css']
})
export class CreateBugComponent implements OnInit {
title:string="CreateBug";
bug:Bug= new Bug();
bugArray:any;
 constructor( private bugService:BugService){}
 save(){
  // console.log("button binding works");
  // console.log(this.user.firstname);
  // this.user.firstname="Kishan";
  const promise=this.bugService.save(this.bug);
  promise.subscribe(response =>{
    console.log(response);
    this.bugArray=response;
    alert('Bug Added..')
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
