import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './frame/frame.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'multi-root',
  standalone: true,
  imports: [CommonModule, FrameComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
