import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionEleveComponent } from './action-eleve.component';

describe('ActionEleveComponent', () => {
  let component: ActionEleveComponent;
  let fixture: ComponentFixture<ActionEleveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionEleveComponent]
    });
    fixture = TestBed.createComponent(ActionEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
