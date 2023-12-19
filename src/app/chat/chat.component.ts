import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'multi-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {}
