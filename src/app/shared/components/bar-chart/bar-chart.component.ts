import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NavigationButtonComponent],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent implements AfterViewInit {
  dataExample = [
    { framework: 'Vue', stars: '1650', color: 'green' },
    { framework: 'Ember', stars: '200', color: 'orange' },
    { framework: 'Angular', stars: '1000', color: 'red' },
    { framework: 'React', stars: '1900', color: 'blue' },
  ];

  svgChart: any;
  svgLegend: any;
  containerWidth: any;
  containerHeight: any;
  margin = { top: 10, right: 30, bottom: 30, left: 50 };

  heightChart: any = 200 - this.margin.top - this.margin.bottom;
  widthChart: any = 450 - this.margin.left - this.margin.right;
  barsChart: any;
  yChart: any;

  constructor() {}
  ngAfterViewInit(): void {
    this.createSvg();
    this.drawBars(this.dataExample);
    this.createLegend(this.dataExample);
  }

  createSvg(): void {
    // init svg
    this.svgChart = d3
      .select('div#bar-chart-basic')
      .append('svg')
      .attr(
        'viewBox',
        `0 0 ${this.widthChart + this.margin.left + this.margin.right} ${
          this.heightChart + this.margin.top + this.margin.bottom
        }`
      )
      .append('g')
      .attr(
        'transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')'
      );
  }

  drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .range([0, this.widthChart])
      .domain(data.map((data) => data.framework))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svgChart
      .append('g')
      .attr('transform', 'translate(0,' + this.heightChart + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('dy', '1em') // Adjust the vertical position if needed
      .style('text-anchor', 'middle');

    // Create the Y-axis band scale
    this.yChart = d3
      .scaleLinear()
      .domain([0, 2000])
      .range([this.heightChart, 0]);

    // Draw the Y-axis on the DOM
    this.svgChart.append('g').call(d3.axisLeft(this.yChart));

    // Create and fill the bars
    this.barsChart = this.svgChart
      .selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', x.bandwidth())
      .attr('x', (data: any) => x(data.framework))
      .attr('y', this.heightChart) // Start the bars from the bottom
      .attr('height', 0) // Start with zero height
      .attr('fill', (data: any) => data.color)
      .transition() // Apply transition to subsequent changes
      .duration(800) // Set the duration of the animation
      .attr('y', (data: any) => this.yChart(data.stars))
      .attr(
        'height',
        (data: any) => this.heightChart - this.yChart(data.stars)
      );
  }

  // tool tip

  // legend
  createLegend(data: any[]): void {
    const legendContainer = d3.select('div#legend-bar-chart-basic');

    // create legend
    const legend = legendContainer
      .selectAll('.legend')
      .data(data)
      .enter()
      .append('div')
      .attr('class', 'legend')
      .style('display', 'flex')
      .style('align-items', 'center')
      .style('margin-left', '40px');

    // box color legend
    legend
      .append('div')
      .style('width', '20px')
      .style('height', '20px')
      .style('margin-right', '8px')
      .style('background-color', (data: any) => data.color);

    // text color legend
    legend
      .append('div')
      .text((data: any) => data.framework)
      .style('font-size', '20px')
      .style('color', '#333');

    // Add click event listener to legend items
    d3.selectAll('.legend').on('click', (event, data: any) => {
      console.log('Clicked legend:', data);
      const clickedFramework = data.framework;
      const correspondingBar = this.barsChart.filter(
        (barChartData: any) => barChartData.framework === clickedFramework
      );
      console.log('correspondingBar', correspondingBar);
      // Toggle the bar's y-position
      correspondingBar
        .transition()
        .duration(500)
        .attr(
          'y',
          (barData: any) => {
            console.log('barData', barData);
          }
          // barData.y === 0 ? this.yChart(barData.stars) : 0
        )
        .attr('height', (barData: any) =>
          barData.y === 0 ? this.heightChart - this.yChart(barData.stars) : 0
        );
    });
  }
}
