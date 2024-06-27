import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListagemComponent } from './item-listagem.component';

describe('ItemListagemComponent', () => {
  let component: ItemListagemComponent;
  let fixture: ComponentFixture<ItemListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemListagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
