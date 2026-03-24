import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ingresos } from '../../../../ingresos';
import { required } from '@angular/forms/signals';
import { gastos } from '../../../../gastos';

@Component({
  selector: 'app-item',
  imports: [DecimalPipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class Item {

  // imageUrl = ""
  // fecha = "23/03/2026"
  // descripcion = "Fuente de ingreso"
  // @Input({required: true}) itemId?: number

  @Input({required: true}) tipo?: string  // gasto on ingreso
  @Input({required: true }) nombre ?: string
  @Input({required: true}) cantidad ?: string
  @Input({required: true}) fecha?: string
  @Input({required: true}) descripcion?: string

  onDeleteItem(){
    console.log(this.nombre)
    if(this.tipo === "ingreso"){
        for (let index = 0; index < ingresos.length; index++) {
        const element = ingresos[index];
        console.log(element)

        if(element.nombre === this.nombre){
          ingresos.splice(index, 1)
        }
      }
    }else if(this.tipo === "gasto"){
      for (let index = 0; index < gastos.length; index++) {
        const element = gastos[index];
        
        if(element.nombre === this.nombre){
          gastos.splice(index, 1)
        }
      }
    }
  }

}
