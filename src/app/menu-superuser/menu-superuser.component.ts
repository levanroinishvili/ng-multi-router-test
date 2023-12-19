import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'multi-menu-superuser',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './menu-superuser.component.html',
  styleUrl: './menu-superuser.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSuperuserComponent {}
