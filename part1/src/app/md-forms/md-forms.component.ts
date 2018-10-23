import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
//import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FavoriteComponent } from '../comp/favorite/favorite.component';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../comp/dialog/dialog.component';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-md-forms',
  templateUrl: './md-forms.component.html',
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
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
    { value: 'pizza-1', viewValue: 'Pizza', isDisabled: true },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  //for email input
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  usernameFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();

  //for chip
  categories = [
    { name: 'begginer' },
    { name: 'Intermediate' },
    { name: 'Advanced' }];

  dialogResultValue: string;

  constructor(private dialog: MatDialog) { }

  /**
   * dialogを開きます。戻り値を受け取ってログに出します。
   */
  openDialog(comment: string) {
    this.dialog.open(DialogComponent, {
      data: { couseId: 1, message: comment }
    })
      .afterClosed().subscribe(
        (result) => {
          console.log(result);
          this.dialogResultValue = result;
        });
  }
  openFavoriteInDialog() {
    this.dialog.open(FavoriteComponent);
  }
  ngOnInit() {
    console.log("on init" + this.indeterminate);
  }

  ngOnDestroy(): void {
    console.log('on destoroy')
  }

  onchange(ind: MatCheckbox) {
    console.log(ind.checked);
    this.indeterminate = ind.checked;
  }
  /* for chips */
  selectedCategory(category) {
    this.categories.filter(c => c !== category)
      .forEach(c => c['selected'] = false);
    category.selected = !category.selected;
  }


}

export interface Food {
  value: string;
  viewValue: string;
  isDisabled?: boolean;
}
