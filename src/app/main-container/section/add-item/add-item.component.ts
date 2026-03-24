import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ingresos } from '../../../ingresos';
import { gastos } from '../../../gastos';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-add-item',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
})
export class AddItem {

  @Input({required:true}) itemCategoria ?:string
  
  nombre = ""
  cantidad = ""
  fecha = ""
  descripcion = ""

  @Output() close = new EventEmitter<void>()

  onCloseAddItem(){
    this.close.emit()
  }

  // Metodo que se activa al enviar el formulario
  onSubmit(form:NgForm){

    if(form.invalid) return

    if (this.itemCategoria === "Nuevo Ingreso"){
      ingresos.push({nombre: this.nombre, cantidad: this.cantidad, fecha: this.fecha, descripcion: this.descripcion})
    }else if(this.itemCategoria === "Nuevo Gasto"){
      gastos.push({nombre: this.nombre, cantidad: this.cantidad, fecha: this.fecha, descripcion: this.descripcion})
    }
    console.log(...ingresos)
    console.log(...gastos)
    this.close.emit()
  }
}
