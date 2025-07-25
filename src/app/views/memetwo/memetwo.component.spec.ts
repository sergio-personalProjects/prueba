import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemetwoComponent } from './memetwo.component';

describe('MemetwoComponent', () => {
  let component: MemetwoComponent;
  let fixture: ComponentFixture<MemetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemetwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
