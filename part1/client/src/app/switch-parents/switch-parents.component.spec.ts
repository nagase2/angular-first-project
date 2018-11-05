import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchParentsComponent } from './switch-parents.component';

describe('SwitchParentsComponent', () => {
  let component: SwitchParentsComponent;
  let fixture: ComponentFixture<SwitchParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
