import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionFamilleComponent } from './action-famille.component';

describe('ActionFamilleComponent', () => {
  let component: ActionFamilleComponent;
  let fixture: ComponentFixture<ActionFamilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionFamilleComponent]
    });
    fixture = TestBed.createComponent(ActionFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
