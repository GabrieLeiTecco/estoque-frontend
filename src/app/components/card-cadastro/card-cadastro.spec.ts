import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCadastro } from './card-cadastro';

describe('CardCadastro', () => {
  let component: CardCadastro;
  let fixture: ComponentFixture<CardCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
