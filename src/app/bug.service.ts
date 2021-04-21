import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Bug} from './Bug';


@Injectable({
  providedIn: 'root'
})
export class BugService {
  getBugByNameAndStatus(name: string,status:string) {
    return this.http.get('http://localhost:8083/bug/search?status=' + status+'&name='+name);
  }
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


  validateBug(bug: Bug) {
    let error = 0;
    let errorText = "";

    if (bug.name) {
      let remText = bug.name.replace(/ /g, "");
      if (remText.length < 1 || remText.length > 25) {
        error++;
        errorText += error + ". Error- Name should be minimum 1 and maximum 25) \n";
      }

    }
    else {
      error++;
      errorText += error + ". Error- Name is mandatory \n";
    }


    if (bug.status) {
    }
    else {
      error++;
      errorText += error + ". Error- status is mandatory \n";
    }

    if (bug.priority) {
    }
    else {
      error++;
      errorText += error + ". Error- priority is mandatory \n";
    }

    if (bug.severity) {

    }
    else {
      error++;
      errorText += error + ". Error- severity is mandatory \n";
    }


    if (bug.type) {

    }
    else {
      error++;
      errorText += error + ". Error- type is mandatory \n";
    }

    if (bug.projectId) {
      let remText = bug.projectId.replace(/ /g, "");
      if (remText.length < 1 || remText.length > 25 || remText.length != bug.projectId.length) {
        error++;
        errorText += error + ". Error- projectId should be minimum 1 and maximum 25 and spaces not allowed) \n";
      }


    }
    else {
      error++;
      errorText += error + ". Error- projectId is mandatory \n";
    }


    if (bug.synopsis) {
      let remText = bug.synopsis.replace(/ /g, "");
      if (remText.length < 10 || remText.length > 50) {
        error++;
        errorText += error + ". Error- synopsis should be minimum 10 and maximum 50) \n";
      }


    }
    else {
      error++;
      errorText += error + ". Error- synopsis is mandatory \n";
    }

    if (bug.module) {
      let remText = bug.module.replace(/ /g, "");
      if (remText.length < 1 || remText.length > 50) {
        error++;
        errorText += error + ". Error- module should be minimum 10 and maximum 50) \n";
      }


    }
    else {
      error++;
      errorText += error + ". Error- module is mandatory \n";
    }


    if (bug.description) {
      let remText = bug.description.replace(/ /g, "");
      if (remText.length < 10 || remText.length > 200) {
        error++;
        errorText += error + ". Error- description should be minimum 10 and maximum 200) \n";
      }
    }
    else {
      error++;
      errorText += error + ". Error- description is mandatory \n";
    }




    if (bug.buildVersion) {
      let remText = bug.buildVersion.replace(/ /g, "");
      if (remText.length < 1 || remText.length > 25) {
        error++;
        errorText += error + ". Error- buildVersion should be minimum 1 and maximum 25) \n";
      }

    }



    if (bug.eta) {

    }


    if (bug.testerId) {
      let remText = bug.testerId.replace(/ /g, "");
      if (remText.length < 1 || remText.length > 25 || remText.length != bug.testerId.length) {
        error++;
        errorText += error + ". Error- testerId should be minimum 1 and maximum 25 and no spaces allowed) \n";
      }

    }


    if (bug.developerId) {
      let remText = bug.developerId.replace(/ /g, "");
      if (remText.length < 1 || remText.length > 25 || remText.length != bug.developerId.length) {
        error++;
        errorText += error + ". Error- developerId should be minimum 1 and maximum 25 and no spaces allowed) \n";
      }

    }



    if (error) {
      if (error < 4) {
        alert("Total error are : " + error + "\n" + errorText);

      }
      else {
        alert("total Errors are : " + error + "\n" + errorText);
        return 0;
      }
    }
    else {
      return 1;
    }


  }
}

