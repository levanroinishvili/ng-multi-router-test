import { Routes } from '@angular/router';
import { FrameComponent } from './frame/frame.component';

export const routes: Routes = [
  {
    path: ':id',
    loadComponent: () =>
      import('./frame/frame.component').then(m => m.FrameComponent),
    data: { location: '1-primary' },
    loadChildren: () => [
      {
        path: ':id',
        data: { location: '1-primary->primary' },
        loadComponent: () =>
          import('./frame/frame.component').then(m => m.FrameComponent),
        loadChildren: () => [
          {
            path: ':id2_1',
            data: { location: '1-primary->primary' },
            loadComponent: () =>
              import('./frame/frame.component').then(m => m.FrameComponent),
          },
          {
            path: ':id2:2',
            outlet: 'left',
            data: { location: '1-primary->left' },
            loadComponent: () =>
              import('./frame/frame.component').then(m => m.FrameComponent),
          },
        ],
      },
      {
        path: ':idBottom',
        outlet: 'bottom',
        title: 'Bottom',
        data: { location: '1-primary->bottom' },
        loadComponent: () =>
          import('./frame/frame.component').then(m => m.FrameComponent),
      },
      {
        path: ':idTop',
        outlet: 'top',
        data: { location: '1-primary->top' },
        loadComponent: () =>
          import('./frame/frame.component').then(m => m.FrameComponent),
      },
      {
        path: ':lid',
        outlet: 'left',
        data: { location: '1-primary->left' },
        loadComponent: () =>
          import('./frame/frame.component').then(m => m.FrameComponent),
        loadChildren: () => [
          {
            path: ':vid',
            data: { location: '1-primary->left->primary' },
            loadComponent: () =>
              import('./frame/frame.component').then(m => m.FrameComponent),
          },
          {
            path: ':bid',
            outlet: 'bottom',
            data: { location: '1-primary->left->bottom' },
            loadComponent: () =>
              import('./frame/frame.component').then(m => m.FrameComponent),
          },
        ],
      },
    ],
  },
  {
    path: ':xid',
    data: { location: '1-Secondary' },
    outlet: 'two',
    component: FrameComponent,
  },
];
