import { Component } from '@angular/core';
import { MenuItem } from "./menu-item/menu-item.component";

@Component({
  selector: 'app-menu',
  imports: [MenuItem],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class Menu {}
