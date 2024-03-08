import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsPageComponent } from './vacations-page.component';

describe('VacationsPageComponent', () => {
  let component: VacationsPageComponent;
  let fixture: ComponentFixture<VacationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
