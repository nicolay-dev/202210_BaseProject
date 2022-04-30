import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeViewComponent } from './coffee-view.component';

describe('CoffeeViewComponent', () => {
  let component: CoffeeViewComponent;
  let fixture: ComponentFixture<CoffeeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
