import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'multi-joke',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokeComponent {
  private readonly data$ = inject(ActivatedRoute).data;
  private readonly dataS = toSignal(this.data$);
  protected readonly jokeS = computed(() => this.dataS()?.['joke']);
}
