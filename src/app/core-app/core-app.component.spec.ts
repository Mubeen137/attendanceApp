import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreAppComponent } from './core-app.component';

describe('CoreAppComponent', () => {
  let component: CoreAppComponent;
  let fixture: ComponentFixture<CoreAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
