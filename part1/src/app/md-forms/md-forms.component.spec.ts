import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdFormsComponent } from './md-forms.component';

describe('MdFormsComponent', () => {
  let component: MdFormsComponent;
  let fixture: ComponentFixture<MdFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
