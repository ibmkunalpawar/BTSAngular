import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.Service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-update',
  templateUrl: './update-bug.component.html',
  styleUrls: ['./update-bug.component.css', './style.css'],
})
export class UpdateBugComponent implements OnInit {
  bug: Bug = new Bug(); //model
  ImgPath: string = './assets/bughawk.jpeg';
  maxLengthSynopsis = 50;
  maxLengthDescription = 200;
  name: String;
  bugArray: any;
  tempbug:any;

  constructor(private bugService: BugService) {}

  getBug() {
    if (this.bug.name) {
      const observable = this.bugService.getBugs(this.bug.name);
      observable.subscribe(
        (response) => {
          this.bugArray = response;
          this.bug = this.bugArray[0];
          if (this.bugArray[0] == undefined) {
            alert('No such record found!');
          }
        },
        (error) => {
          console.log(error);
          alert('Error!');
        }
      );
    } else {
      alert('Please enter a bug name.');
    }
  }


  validate() {
    if (!this.bug.name.trim()) {
      alert('Please enter Bug name.');
    } else if (!this.bug.projectId.trim()) {
      alert('Please enter Project ID.');
    } else if (!this.bug.eta) {
      alert('ETA cannot be left empty!');
    } else if (!this.bug.module.trim()) {
      alert('Please enter Module.');
    } else if (!this.bug.synopsis.trim()) {
      alert('Synopsis cannot be left blank!');
    } else if (!this.bug.description.trim()) {
      alert('Description cannot be left blank!');
    }
  }

  valueCheckSynopsis() {
    const remainingCharactersSynopsis = <HTMLTextAreaElement>(
      document.getElementById('charSynopsis')
    );
    const divTag = document.getElementById('text1');
    remainingCharactersSynopsis.style.visibility = 'visible';
    divTag.style.visibility = 'visible';
    length = this.bug.synopsis.length;
    length = this.maxLengthSynopsis - length;
    remainingCharactersSynopsis.textContent = length.toString();
  }

  valueCheckDescription() {
    const remainingCharactersDescription = <HTMLTextAreaElement>(
      document.getElementById('charDescription')
    );
    const divTag = document.getElementById('text2');
    remainingCharactersDescription.style.visibility = 'visible';
    divTag.style.visibility = 'visible';
    length = this.bug.description.length;
    length = this.maxLengthDescription - length;
    remainingCharactersDescription.textContent = length.toString();
  }

  update() {
    this.validate();
    const observable = this.bugService.update(this.bug, this.bug.id);
    observable.subscribe(
      (response) => {
        alert('Bug Updated!');
      },
      (error) => {
        alert('Error : -'+error.headers.get('error'));
      }
    );
  }
  ngOnInit(): void {}
}
