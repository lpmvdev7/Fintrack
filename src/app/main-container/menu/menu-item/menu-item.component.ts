import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItem {
  @Input({required:true}) categoria!:string
  @Input({required: true}) imageUrl!:string
}
