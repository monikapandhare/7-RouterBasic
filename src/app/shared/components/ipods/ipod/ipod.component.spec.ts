import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpodComponent } from './ipod.component';

describe('IpodComponent', () => {
  let component: IpodComponent;
  let fixture: ComponentFixture<IpodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
