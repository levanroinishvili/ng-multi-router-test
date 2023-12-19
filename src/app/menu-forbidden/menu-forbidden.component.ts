import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'multi-menu-forbidden',
  standalone: true,
  imports: [],
  templateUrl: './menu-forbidden.component.html',
  styleUrl: './menu-forbidden.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuForbiddenComponent {}
