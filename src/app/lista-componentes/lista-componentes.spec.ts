import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComponentes } from './lista-componentes';

describe('ListaComponentes', () => {
  let component: ListaComponentes;
  let fixture: ComponentFixture<ListaComponentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaComponentes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaComponentes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
