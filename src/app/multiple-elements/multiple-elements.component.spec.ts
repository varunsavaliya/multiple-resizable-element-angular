import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleElementsComponent } from './multiple-elements.component';

describe('MultipleElementsComponent', () => {
  let component: MultipleElementsComponent;
  let fixture: ComponentFixture<MultipleElementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleElementsComponent]
    });
    fixture = TestBed.createComponent(MultipleElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
