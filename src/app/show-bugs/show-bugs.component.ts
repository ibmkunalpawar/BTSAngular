import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import {BugService} from '../bug.service'
@Component({
  selector: 'app-show-bugs',
  templateUrl: './show-bugs.component.html',
  styleUrls: ['./show-bugs.component.css']
})
export class ShowBugsComponent implements OnInit {
title:string="show bugs";
bug :Bug=new Bug();
bugArray:any;
  constructor(private bugService:BugService) {};
    getBugs(name:string){
      const observable=this.bugService.getBugs(name);
      observable.subscribe(response=>{console.log(response);this.bugArray=response});

    }
    getBugsByStatus(status:string)
    {
      const observable=this.bugService.getBugsByStatus(status);
      observable.subscribe(response=>{console.log(response);this.bugArray=response});
    }


  ngOnInit(): void {
    const observable=this.bugService.getBugs('');
    observable.subscribe(response=>{this.bugArray=response});
  }

}
