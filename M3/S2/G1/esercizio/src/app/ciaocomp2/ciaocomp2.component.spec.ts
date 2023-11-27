import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ciaocomp2Component } from './ciaocomp2.component';

describe('Ciaocomp2Component', () => {
  let component: Ciaocomp2Component;
  let fixture: ComponentFixture<Ciaocomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ciaocomp2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ciaocomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
