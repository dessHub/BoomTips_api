/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BttsComponent } from './btts.component';

describe('BttsComponent', () => {
  let component: BttsComponent;
  let fixture: ComponentFixture<BttsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BttsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BttsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
