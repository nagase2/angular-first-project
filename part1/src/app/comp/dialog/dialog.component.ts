import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  receivedData;

  //MEMO: 
  constructor(@Inject(MAT_DIALOG_DATA) myData: any) {

    console.log('data', myData);
    this.receivedData = myData;
  }

  ngOnInit() {
  }

}
