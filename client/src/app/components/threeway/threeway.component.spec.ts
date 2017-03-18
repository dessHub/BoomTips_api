/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThreewayComponent } from './threeway.component';

describe('ThreewayComponent', () => {
  let component: ThreewayComponent;
  let fixture: ComponentFixture<ThreewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
