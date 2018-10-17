import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-md-forms',
  templateUrl: './md-forms.component.html',
  styleUrls: ['./md-forms.component.css']
})
export class MdFormsComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log("on destoroy")
  }
  checked = false;
  indeterminate = true;

  constructor() { }

  ngOnInit() {
    console.log("on init" + this.indeterminate);
  }

  onchange(ind: MatCheckbox) {
    console.log(ind.checked);
    this.indeterminate = ind.checked;
  }

}
