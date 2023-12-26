import { Routes } from '@angular/router';
import { FrameComponent } from './frame/frame.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./frame/frame.component').then(m => m.FrameComponent),
  },
  {
    path: ':id',
    component: FrameComponent,
    loadChildren: () => [
      {
        path: ':id',
        component: FrameComponent,
        loadChildren: () => [
          {
            path: ':id2_1',
            component: FrameComponent,
          },
          {
            path: ':id2:2',
            outlet: 'left',
            component: FrameComponent,
          },
        ],
      },
      {
        path: ':idBottom',
        outlet: 'bottom',
        component: FrameComponent,
      },
      {
        path: ':idTop',
        outlet: 'top',
        component: FrameComponent,
      },
      {
        path: ':lid',
        outlet: 'left',
        component: FrameComponent,
        loadChildren: () => [
          { path: ':vid', component: FrameComponent },
          {
            path: ':bid',
            outlet: 'bottom',
            component: FrameComponent,
          },
        ],
      },
    ],
  },
];
