import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-md-forms',
  templateUrl: './md-forms.component.html',
  styleUrls: ['./md-forms.component.css']
})
export class MdFormsComponent implements OnInit, OnDestroy {
  // for checkbox
  checked = false;
  indeterminate = true;
  // for radiobutton 
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  //for selector
  foodControl = new FormControl('', [Validators.required]);
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza', isDisabled: true},
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

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

export interface Food {
  value: string;
  viewValue: string;
  isDisabled?: boolean;
}
