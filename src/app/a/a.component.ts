import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'multi-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AComponent {}
