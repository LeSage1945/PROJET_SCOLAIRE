import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentActionComponent } from './agent-action.component';

describe('AgentActionComponent', () => {
  let component: AgentActionComponent;
  let fixture: ComponentFixture<AgentActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentActionComponent]
    });
    fixture = TestBed.createComponent(AgentActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
