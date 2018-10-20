import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-md-forms',
  templateUrl: './md-forms.component.html',
  styleUrls: ['./md-forms.component.css']
})
export class MdFormsComponent implements OnInit, OnDestroy {
  checked = false;
  // tslint:disable-next-line:member-ordering
  indeterminate = true;

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  ngOnDestroy(): void {
    console.log('on destoroy')
  }


  constructor() { }

  ngOnInit() {
    console.log("on init" + this.indeterminate);
  }

  onchange(ind: MatCheckbox) {
    console.log(ind.checked);
    this.indeterminate = ind.checked;
  }

}
