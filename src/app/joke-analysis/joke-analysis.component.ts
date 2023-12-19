import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'multi-joke-analysis',
  standalone: true,
  imports: [],
  templateUrl: './joke-analysis.component.html',
  styleUrl: './joke-analysis.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokeAnalysisComponent {}
