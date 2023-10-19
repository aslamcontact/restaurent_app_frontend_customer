import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalMenuComponent } from './global-menu.component';

describe('GlobalMenuComponent', () => {
  let component: GlobalMenuComponent;
  let fixture: ComponentFixture<GlobalMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalMenuComponent]
    });
    fixture = TestBed.createComponent(GlobalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
