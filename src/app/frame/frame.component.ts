import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'multi-frame',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameComponent {}
