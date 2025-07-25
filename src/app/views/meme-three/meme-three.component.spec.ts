import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeThreeComponent } from './meme-three.component';

describe('MemeThreeComponent', () => {
  let component: MemeThreeComponent;
  let fixture: ComponentFixture<MemeThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemeThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
