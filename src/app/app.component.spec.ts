import { TestBed, waitForAsync } from '@angular/core/testing';
import { CotecnaMaterialSharedModule } from 'src/shared/cotecna.material.shared.module';
import { MaterialSharedModule } from 'src/shared/material.shared.module';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:
        [
          MaterialSharedModule,
          CotecnaMaterialSharedModule
        ]
    }).compileComponents();
  }));
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
