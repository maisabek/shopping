import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingIndectorComponent } from './loading-indector.component';

describe('LoadingIndectorComponent', () => {
  let component: LoadingIndectorComponent;
  let fixture: ComponentFixture<LoadingIndectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingIndectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingIndectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
