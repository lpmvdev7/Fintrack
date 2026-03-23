import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class Item {
  // @Input({required: true}) itemId?: number
  @Input({required: true }) nombre ?: string
  @Input({required: true}) cantidad ?: string
}
