import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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
  noSupportScreen: any;
  routes: IRoutes[];
  constructor() {
    this.routes = routes;
    this.checkScreenWidth();
  }
  // check screen
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenWidth();
  }

  private checkScreenWidth(): void {
    this.noSupportScreen = window.innerWidth < 1024;
  }
}
