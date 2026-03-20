import { Component } from '@angular/core';
import { Item } from "./item/item.component";

@Component({
  selector: 'app-container-items',
  imports: [Item],
  templateUrl: './container-items.component.html',
  styleUrl: './container-items.component.css',
})
export class ContainerItems {}
