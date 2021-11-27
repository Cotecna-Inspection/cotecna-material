import { TestBed, async } from '@angular/core/testing';
import { CotecnaMaterialSharedModule } from 'src/shared/cotecna.material.shared.module';
import { MaterialSharedModule } from 'src/shared/material.shared.module';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
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
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
