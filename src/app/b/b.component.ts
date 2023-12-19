import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'multi-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BComponent {}
