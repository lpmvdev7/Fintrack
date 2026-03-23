import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

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
  @Input({required: true }) nombre ?: string
  @Input({required: true}) cantidad ?: string
}
