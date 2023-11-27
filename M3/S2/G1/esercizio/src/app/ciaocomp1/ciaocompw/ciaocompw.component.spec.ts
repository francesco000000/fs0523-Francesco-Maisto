import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiaocompwComponent } from './ciaocompw.component';

describe('CiaocompwComponent', () => {
  let component: CiaocompwComponent;
  let fixture: ComponentFixture<CiaocompwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CiaocompwComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CiaocompwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
