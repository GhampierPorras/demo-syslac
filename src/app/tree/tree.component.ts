import { Component, OnInit, ViewChild } from '@angular/core';
import { extendArray, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { enableRipple } from '@syncfusion/ej2-base';
import Item from '../models/item.model';
import { CatalogoService } from '../services/catalogo.service';
enableRipple(true);

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  @ViewChild('tree')
  public tree: TreeGridComponent;

  @ViewChild('tree2')
  public tree2: TreeGridComponent;

  public catalogosA: Item[];
  public catalogosB: Item[];

  constructor(
    private catalogoService: CatalogoService
  ) { }

  ngOnInit(): void {
    this.catalogosA = this.catalogoService.getCatalogosA();
    this.catalogosB = this.catalogoService.getCatalogosB();
  }

  public onBtnDerechaClick() {
    const selectedItems: number[] = this.tree.selectionModule.getCheckedrecords().filter(x => x['level'] == 2).map(x => x['codigo']) as number[];
    const dataSource: object = extendArray((this.tree as TreeGridComponent).dataSource as object[]);
    const copy: Item[] = JSON.parse(JSON.stringify(dataSource));

    copy.forEach(x =>
      x.childrens?.forEach(y =>
        y.childrens?.forEach(z => {

          if (selectedItems.includes(z.codigo)) {

            z.seleccionado = true;
            y.seleccionado = true;
            x.seleccionado = true;

          }

        }
        )));

    const seleccionados = copy.filter(x => x.seleccionado);
    seleccionados.forEach(x => {
      if (x.childrens) {
        x.childrens = x.childrens.filter(x => x.seleccionado);

        x.childrens.forEach(x => {
          if (x.childrens) {
            x.childrens = x.childrens.filter(x => x.seleccionado);
          }
        })
      }
    });


    
    (dataSource as Item[]).forEach(x =>
      x.childrens?.forEach(y =>
        y.childrens?.forEach(z => {

          if (selectedItems.includes(z.codigo)) {

            y.childrens = y.childrens.filter(q => q.codigo != z.codigo);

          }

        }
        )));

    (this.tree as TreeGridComponent).dataSource = dataSource;

    const dataSource2: object = extendArray((this.tree2 as TreeGridComponent).dataSource as object[]);

    (dataSource2 as Item[]).forEach(x =>
      x.childrens?.forEach(y => {

        seleccionados.forEach(z => {
          z.childrens.forEach(a => {
            if (y.codigo == a.codigo) {
              y.childrens = y.childrens.concat(a.childrens);
            }
          })
        });

      }
      ));

      (this.tree2 as TreeGridComponent).dataSource = dataSource2;
  }

  public onBtnIzquierdaClick() {
    const selectedItems: number[] = this.tree2.selectionModule.getCheckedrecords().filter(x => x['level'] == 2).map(x => x['codigo']) as number[];

    const dataSource: object = extendArray((this.tree2 as TreeGridComponent).dataSource as object[]);
    const copy: Item[] = JSON.parse(JSON.stringify(dataSource));

    copy.forEach(x =>
      x.childrens?.forEach(y =>
        y.childrens?.forEach(z => {

          if (selectedItems.includes(z.codigo)) {

            z.seleccionado = true;
            y.seleccionado = true;
            x.seleccionado = true;

          }

        }
        )));

    const seleccionados = copy.filter(x => x.seleccionado);
    seleccionados.forEach(x => {
      if (x.childrens) {
        x.childrens = x.childrens.filter(x => x.seleccionado);

        x.childrens.forEach(x => {
          if (x.childrens) {
            x.childrens = x.childrens.filter(x => x.seleccionado);
          }
        })
      }
    });


    
    (dataSource as Item[]).forEach(x =>
      x.childrens?.forEach(y =>
        y.childrens?.forEach(z => {

          if (selectedItems.includes(z.codigo)) {

            y.childrens = y.childrens.filter(q => q.codigo != z.codigo);

          }

        }
        )));

    (this.tree2 as TreeGridComponent).dataSource = dataSource;

    const dataSource2: object = extendArray((this.tree as TreeGridComponent).dataSource as object[]);

    (dataSource2 as Item[]).forEach(x =>
      x.childrens?.forEach(y => {

        seleccionados.forEach(z => {
          z.childrens.forEach(a => {
            if (y.codigo == a.codigo) {
              y.childrens = y.childrens.concat(a.childrens);
            }
          })
        });

      }
      ));

      (this.tree as TreeGridComponent).dataSource = dataSource2;
  }

}

