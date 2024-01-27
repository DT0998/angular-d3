import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.scss',
})
export class NavigationButtonComponent {
  @Input() prevPath: string | undefined = undefined;
  @Input() nextPath: string | undefined = undefined;

  @Input() prevName: string | undefined = undefined;
  @Input() nextName: string | undefined = undefined;

  @Input() btnType: 'prev' | 'next' = 'prev';
  constructor() {}
}
