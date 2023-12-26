import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrameBaseDirective } from '../frame-base.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rt-frame',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss',
})
export class FrameComponent extends FrameBaseDirective {}
