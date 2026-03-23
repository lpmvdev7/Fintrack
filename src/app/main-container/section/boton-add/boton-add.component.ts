import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-add',
  imports: [],
  templateUrl: './boton-add.component.html',
  styleUrl: './boton-add.component.css',
})
export class BotonAdd {
  @Output()  botonAddTouch = new EventEmitter<boolean>()
  botonTouched = false


  onTouchBotonAdd(){
    this.botonTouched = true
    this.botonAddTouch.emit(this.botonTouched)
  }
}
