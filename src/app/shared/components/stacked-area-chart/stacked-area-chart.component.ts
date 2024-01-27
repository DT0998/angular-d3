import { Component } from '@angular/core';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';

@Component({
  selector: 'app-stacked-area-chart',
  standalone: true,
  imports: [NavigationButtonComponent],
  templateUrl: './stacked-area-chart.component.html',
  styleUrl: './stacked-area-chart.component.scss',
})
export class StackedAreaChartComponent {
  dataExample = [
    { framework: 'Vue', stars: '1650', color: 'green' },
    { framework: 'Ember', stars: '200', color: 'orange' },
    { framework: 'Angular', stars: '1000', color: 'red' },
    { framework: 'React', stars: '1900', color: 'blue' },
  ];
}
