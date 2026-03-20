import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header.component";
import { MainContainer } from "./main-container/main-container.component";

@Component({
  selector: 'app-root',
  imports: [Header, MainContainer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('Fintrack');
}
