import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoffeeViewComponent } from './coffee-view.component';
import { ApiService } from 'src/app/services/api.service';
import { coffeeListMock } from 'src/app/mocks/coffee-list-mock';
import { DebugElement } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CoffeeViewComponent', () => {
  let component: CoffeeViewComponent;
  let fixture: ComponentFixture<CoffeeViewComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [ CoffeeViewComponent ],
      providers: [ ApiService, HttpClient ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeViewComponent);
    component = fixture.componentInstance;
    component.coffeeList = coffeeListMock;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toEqual(4);
  });
});
