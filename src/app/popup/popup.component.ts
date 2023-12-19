import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'multi-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupComponent {}
