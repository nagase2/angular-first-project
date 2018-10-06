import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';


@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
  //form goup を使った場合の書き方
  // form = new FormGroup({
  //   // リスト表示のために使う
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // });
  form;

  // formbuilderを使ったときの書き方
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: ['', Validators.minLength],
        phone: ['']
      }),
      topics: fb.array([])
    });
  }

  addTopic(topic: HTMLInputElement) {
    console.log('add topic called.' + topic.value);
    if (topic.value.length > 0) {
      this.topics.push(new FormControl(topic.value));
    }
    topic.value = '';
  }

  /**
   * delete selected item from list
   */
  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    //
    this.topics.removeAt(index);

  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  ngOnInit() {
  }

}
