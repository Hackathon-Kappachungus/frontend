import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveViewComponent } from './live-view.component';

describe('LiveViewComponent', () => {
  let component: LiveViewComponent;
  let fixture: ComponentFixture<LiveViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
