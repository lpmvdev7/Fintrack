import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart, ArcElement, Tooltip, Legend, PieController } from 'chart.js';
import { ingresos } from '../../../ingresos';
import { gastos } from '../../../gastos';

Chart.register(ArcElement, Tooltip, Legend, PieController);

@Component({
  selector: 'app-grafico',
  imports: [],
  standalone: true,
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css',
})
export class Grafico implements OnInit {
  @ViewChild('pieChart', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  labelsData: string[] = []
  moneyData: string[] = []

  ngOnInit() {
    for (let index = 0; index < ingresos.length; index++) {
      const element = ingresos[index];
      this.labelsData.push(element.nombre)
      this.moneyData.push(element.cantidad)
    }

    for (let index = 0; index < gastos.length; index++) {
      const element = gastos[index];
      this.labelsData.push(element.nombre)
      this.moneyData.push(element.cantidad)
    }

    new Chart(this.canvasRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.labelsData,
        datasets: [{
          backgroundColor: ['#6A9EEB', 'gray', 'rgb(191, 215, 250)', '#a3afc0', '#3677d8'],
          data: this.moneyData
        }]
      },
      options: {
        responsive: true
      }
    });
  }
}