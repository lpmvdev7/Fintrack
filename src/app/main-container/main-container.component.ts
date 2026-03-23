import { Component } from '@angular/core';
import { Menu } from "./menu/menu.component";
import { BotonAdd } from "./section/boton-add/boton-add.component";
import { Section } from "./section/section.component";

@Component({
  selector: 'app-main-container',
  imports: [Menu, BotonAdd, Section],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css',
})
export class MainContainer {

  cadenaValue = ""
  onMenuSelected(cadena:string){
    console.log("MainContainer recibe: ", cadena)
    this.cadenaValue = cadena
  }
}
