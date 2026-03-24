import { Component, Input } from '@angular/core';
import { BotonAdd } from "./boton-add/boton-add.component";
import { AddItem } from "./add-item/add-item.component";
import { ContainerItems } from "./container-items/container-items.component";
import { Total } from "./total/total.component";
import { ingresos } from '../../ingresos';
import { gastos } from '../../gastos';
import { Grafico } from './grafico/grafico.component';

@Component({
  selector: 'app-section',
  imports: [BotonAdd, AddItem, ContainerItems, Total, Grafico],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
})
export class Section {

  @Input() itemSelected = ""

  arrayIngresos = ingresos
  arrayGastos = gastos
  
  isBotonAddPressed = false

  onTouchBotonAdd(botonValue:boolean){
    this.isBotonAddPressed = botonValue
  }

  onCloseAddItem(){
    this.isBotonAddPressed = false
  }

}
