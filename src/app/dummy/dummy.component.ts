import { Component } from '@angular/core';
import { FrameBaseDirective } from '../frame-base.directive';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'rt-dummy',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: '../frame/frame.component.html',
  styleUrl: '../frame/frame.component.scss',
})
export class DummyComponent extends FrameBaseDirective {}
