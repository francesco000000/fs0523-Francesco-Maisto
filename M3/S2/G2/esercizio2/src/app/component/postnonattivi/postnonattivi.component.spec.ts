import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostnonattiviComponent } from './postnonattivi.component';

describe('PostnonattiviComponent', () => {
  let component: PostnonattiviComponent;
  let fixture: ComponentFixture<PostnonattiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostnonattiviComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostnonattiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
