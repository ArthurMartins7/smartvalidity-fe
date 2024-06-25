import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProdutoDetalheComponent } from './item-produto-detalhe.component';

describe('ItemProdutoDetalheComponent', () => {
  let component: ItemProdutoDetalheComponent;
  let fixture: ComponentFixture<ItemProdutoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemProdutoDetalheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemProdutoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
