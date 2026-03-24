// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-grafico',
//   imports: [],
//   templateUrl: './grafico.component.html',
//   styleUrl: './grafico.component.css',
// })
// export class Grafico {}


import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

@Component({
  selector: 'app-grafico',
  imports: [],
  standalone: true,
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css',
})
export class Grafico implements OnInit {
  @ViewChild('miGrafico', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  ngOnInit() {
    new Chart(this.canvasRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Trabajo', 'Cetes', 'Inversiones', 'Escuela'],
        datasets: [{
          data: [1500, 1500, 1500, 1500],
          backgroundColor: [
            '#2563EB',
            '#60A5FA',
            '#BAD6F9',
            '#9CA3AF',
          ],
          borderWidth: 0,
        }]
      },
      options: {
        cutout: '65%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 20,
              usePointStyle: true,
              pointStyleWidth: 16,
              generateLabels: (chart) => {
                const data = chart.data;
                return data.labels!.map((label, i) => ({
                  text: "Hola",
                  fillStyle: (data.datasets[0].backgroundColor as string[])[i],
                  pointStyle: 'rect',
                  index: i
                }));
              }
            }
          }
        }
      }
    });
  }
}