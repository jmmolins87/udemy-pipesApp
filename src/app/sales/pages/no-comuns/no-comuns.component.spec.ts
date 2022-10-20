import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoComunsComponent } from './no-comuns.component';

describe('NoComunsComponent', () => {
  let component: NoComunsComponent;
  let fixture: ComponentFixture<NoComunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoComunsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoComunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
