import { Component } from '@angular/core';

@Component({
  selector: 'app-stacked-area-chart',
  standalone: true,
  imports: [],
  templateUrl: './stacked-area-chart.component.html',
  styleUrl: './stacked-area-chart.component.scss',
})
export class StackedAreaChartComponent {
  private dataExample = [
    { Framework: 'Vue', Stars: '166443', Released: '2014' },
    { Framework: 'React', Stars: '150793', Released: '2013' },
    { Framework: 'Angular', Stars: '62342', Released: '2016' },
    { Framework: 'Backbone', Stars: '27647', Released: '2010' },
    { Framework: 'Ember', Stars: '21471', Released: '2011' },
  ];
}