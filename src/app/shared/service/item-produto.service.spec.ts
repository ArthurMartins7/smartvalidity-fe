import { TestBed } from '@angular/core/testing';

import { ItemProdutoService } from './item-produto.service';

describe('ItemProdutoService', () => {
  let service: ItemProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
