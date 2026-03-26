import { describe, it, beforeEach, expect } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [BannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    component.show = true;
    component.icon = "";
    component.firstSentence = "";
    component.secondSentence = "";
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
