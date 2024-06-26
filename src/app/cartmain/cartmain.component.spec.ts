/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartmainComponent } from './cartmain.component';

describe('CartmainComponent', () => {
  let component: CartmainComponent;
  let fixture: ComponentFixture<CartmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
