import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ciaocomp1Component } from './ciaocomp1.component';

describe('Ciaocomp1Component', () => {
  let component: Ciaocomp1Component;
  let fixture: ComponentFixture<Ciaocomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ciaocomp1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ciaocomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
