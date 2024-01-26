import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layouts/layout.component';
import { BarChartComponent } from './shared/components/bar-chart/bar-chart.component';
import { StackedAreaChartComponent } from './shared/components/stacked-area-chart/stacked-area-chart.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'bar-chart', pathMatch: 'full' },
      { path: 'bar-chart', component: BarChartComponent },
      { path: 'stacked-area-chart', component: StackedAreaChartComponent },
      { path: '404', component: NotFoundComponent },
      { path: '**', redirectTo: '/404' },
    ],
  },
];
