import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularmaterialComponent } from './angularmaterial.component';

describe('AngularmaterialComponent', () => {
  let component: AngularmaterialComponent;
  let fixture: ComponentFixture<AngularmaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularmaterialComponent]
    });
    fixture = TestBed.createComponent(AngularmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
