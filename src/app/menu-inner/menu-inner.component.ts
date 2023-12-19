import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'multi-menu-inner',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './menu-inner.component.html',
  styleUrl: './menu-inner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuInnerComponent {}
