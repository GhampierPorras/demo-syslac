import { Injectable } from '@angular/core';
import Item from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor() { }

  public getCatalogosA() {
    let catalogos: Item[] = [
      {
        id: 1, codigo: 1, descripcion: 'Primer catalogo', childrens: [
          {
            id: 2, codigo: 2, descripcion: 'Primer categoría', childrens: [
              { id: 3, codigo: 3, descripcion: 'Primer procedimiento' },
              { id: 4, codigo: 4, descripcion: 'Segundo procedimiento' },
            ]
          },
          {
            id: 5, codigo: 5, descripcion: 'Segunda categoría', childrens: [
              { id: 6, codigo: 6, descripcion: 'Tercer procedimiento' },
            ]
          },
        ]
      },
      { id: 7, codigo: 7, descripcion: 'Segundo catalogo' },
    ]
    return catalogos;
  }

  public getCatalogosB() {
    let catalogos: Item[] = [
      {
        id: 1, codigo: 1, descripcion: 'Primer catalogo', childrens: [
          {
            id: 2, codigo: 2, descripcion: 'Primer categoría', childrens: [
            ]
          },
          {
            id: 5, codigo: 5, descripcion: 'Segunda categoría', childrens: [
            ]
          },
        ]
      },
      { id: 7, codigo: 7, descripcion: 'Segundo catalogo' },
    ]
    return catalogos;
  }

}
