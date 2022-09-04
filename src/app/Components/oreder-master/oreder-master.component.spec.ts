import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrederMasterComponent } from './oreder-master.component';

describe('OrederMasterComponent', () => {
  let component: OrederMasterComponent;
  let fixture: ComponentFixture<OrederMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrederMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrederMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
