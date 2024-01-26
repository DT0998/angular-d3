import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionMenuOutline } from '@ng-icons/ionicons';
import { routes } from '../constants/routes';
import { IRoutes } from '../models/models';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    NgIconComponent,
    RouterOutlet,
    RouterModule,
    CommonModule,
  ],
  providers: [provideIcons({ ionMenuOutline })],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  routes: IRoutes[];
  constructor() {
    this.routes = routes;
  }
}
