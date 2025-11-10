import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesempenhoPage } from './desempenho.page';

describe('DesempenhoPage', () => {
  let component: DesempenhoPage;
  let fixture: ComponentFixture<DesempenhoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DesempenhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});