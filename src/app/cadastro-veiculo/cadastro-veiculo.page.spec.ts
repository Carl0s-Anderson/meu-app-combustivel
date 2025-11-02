import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroVeiculoPage } from './cadastro-veiculo.page';

describe('CadastroVeiculoPage', () => {
  let component: CadastroVeiculoPage;
  let fixture: ComponentFixture<CadastroVeiculoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroVeiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
