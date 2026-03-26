import { describe, it, beforeEach, expect } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualToolbarComponent } from './contextual-toolbar.component';
import { ContextualToolbarDisplayMode } from "../model/contextual-toolbar-display-mode";

describe('ContextualToolbarComponent', () => {
  let component: ContextualToolbarComponent;
  let fixture: ComponentFixture<ContextualToolbarComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ContextualToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContextualToolbarComponent);
    component = fixture.componentInstance;
    component.count = 2;
    component.actions = [
      { icon: 'home ', name: 'Home', text: 'Home ', tooltip: 'Home' },
      { icon: 'search ', name: 'Search', text: 'Search', tooltip: 'Search' }
    ];
    component.displayMode = ContextualToolbarDisplayMode.icons;
    component.moreActions = [];
    component.contextualizeTo = 'card';
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
