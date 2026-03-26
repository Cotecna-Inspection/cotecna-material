import { FabSpeedDialComponent } from './fab-speed-dial.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, beforeEach, expect } from 'vitest';
import {provideAnimations} from "@angular/platform-browser/animations";

describe('FabSpeedDialComponent', () => {
  let component: FabSpeedDialComponent;
  let fixture: ComponentFixture<FabSpeedDialComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [FabSpeedDialComponent],
      providers: [provideAnimations(),]
    }).compileComponents();

    fixture = TestBed.createComponent(FabSpeedDialComponent);
    component = fixture.componentInstance;
    component.actions = [{icon:'home ', name:'Home', text:'Home ', tooltip:'Home '},{icon:'search ', name:'Search', text:'Search ', tooltip:'Search '}];
    component.mainIcon = "home";
    component.color = "primary";
    await fixture.whenStable();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
