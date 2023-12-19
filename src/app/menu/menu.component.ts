import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuInnerComponent } from '../menu-inner/menu-inner.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'multi-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MenuInnerComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {}
