import { Component, Input } from '@angular/core';
import { Item } from "./item/item.component";
import { ingresos } from '../../../ingresos';
import { gastos } from '../../../gastos';

@Component({
  selector: 'app-container-items',
  imports: [Item],
  templateUrl: './container-items.component.html',
  styleUrl: './container-items.component.css',
})
export class ContainerItems {

  @Input()itemSelected ?: string
  arrayGastos = gastos
  arrayIngresos = ingresos
}
