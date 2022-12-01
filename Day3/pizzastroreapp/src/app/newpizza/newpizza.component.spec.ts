import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpizzaComponent } from './newpizza.component';

describe('NewpizzaComponent', () => {
  let component: NewpizzaComponent;
  let fixture: ComponentFixture<NewpizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
