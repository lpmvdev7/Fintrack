import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ingresos } from '../../../ingresos';

@Component({
  selector: 'app-add-item',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
})
export class AddItem {

  @Input({required:true}) itemCategoria ?:string
  
  nombreFuenteIngreso = ""
  cantidad = 0
  fecha = ""
  descripcion = ""

  @Output() close = new EventEmitter<void>()

  onCloseAddItem(){
    this.close.emit()
  }

  // Metodo que se activa al enviar el formulario
  onSubmit(){
    ingresos.push({nombre: this.nombreFuenteIngreso, cantidad: this.cantidad, fecha: this.fecha, descripcion: this.descripcion})
    console.log(ingresos)
    this.close.emit()
  }
}
