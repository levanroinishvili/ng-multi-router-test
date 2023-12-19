import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'multi-menu-user',
  standalone: true,
  imports: [],
  templateUrl: './menu-user.component.html',
  styleUrl: './menu-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuUserComponent {}
