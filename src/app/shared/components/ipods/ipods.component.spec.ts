import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpodsComponent } from './ipods.component';

describe('IpodsComponent', () => {
  let component: IpodsComponent;
  let fixture: ComponentFixture<IpodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
