import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheSalaComponent } from './detalhe-sala.component';

describe('DetalheSalaComponent', () => {
  let component: DetalheSalaComponent;
  let fixture: ComponentFixture<DetalheSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheSalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
