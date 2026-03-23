import { Component } from '@angular/core';
import { BotonAdd } from "./boton-add/boton-add.component";
import { AddItem } from "./add-item/add-item.component";
import { ContainerItems } from "./container-items/container-items.component";
import { Total } from "./total/total.component";

@Component({
  selector: 'app-section',
  imports: [BotonAdd, AddItem, ContainerItems, Total],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
})
export class Section {

  isBotonAddPressed = false

  onTouchBotonAdd(botonValue:boolean){
    this.isBotonAddPressed = true
  }
}
