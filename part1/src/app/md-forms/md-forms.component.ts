import { Component, OnInit } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-md-forms',
  templateUrl: './md-forms.component.html',
  styleUrls: ['./md-forms.component.css']
})
export class MdFormsComponent implements OnInit {
  checked = false;
  indeterminate = true;

  constructor() { }

  ngOnInit() {
  }

  onchange(ind: MatCheckbox) {
    console.log(ind.checked);
  }

}
