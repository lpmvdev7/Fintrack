import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItem {
  @Input({required:true}) categoria!:string
  @Input({required: true}) imageUrl!:string
  // @Input({required: true}) imageUrlActive!: string
  @Input({required: true}) itemId!: string
  // @Input() isActive: boolean = false

  @Output() itemClickedEmmiter = new EventEmitter<string>()

  onItemClicked(){
    this.itemClickedEmmiter.emit(this.itemId)
  }
}
