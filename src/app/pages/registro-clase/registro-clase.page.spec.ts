import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroClasePage } from './registro-clase.page';

describe('RegistroClasePage', () => {
  let component: RegistroClasePage;
  let fixture: ComponentFixture<RegistroClasePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroClasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
