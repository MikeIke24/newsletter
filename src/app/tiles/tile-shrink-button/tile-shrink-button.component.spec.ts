import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileShrinkButtonComponent } from './tile-shrink-button.component';

describe('TileShrinkButtonComponent', () => {
  let component: TileShrinkButtonComponent;
  let fixture: ComponentFixture<TileShrinkButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileShrinkButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileShrinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
