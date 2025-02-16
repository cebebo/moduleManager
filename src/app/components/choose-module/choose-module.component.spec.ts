import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseModuleComponent } from './choose-module.component';

describe('ChooseModuleComponent', () => {
  let component: ChooseModuleComponent;
  let fixture: ComponentFixture<ChooseModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
