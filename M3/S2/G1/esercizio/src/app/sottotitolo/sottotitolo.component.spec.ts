import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SottotitoloComponent } from './sottotitolo.component';

describe('SottotitoloComponent', () => {
  let component: SottotitoloComponent;
  let fixture: ComponentFixture<SottotitoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SottotitoloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SottotitoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
