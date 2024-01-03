import { Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { FrameComponent } from './frame/frame.component';

export const routes: Routes = [
  {
    path: 'never',
    data: { location: '1-primary-only' },
    component: DummyComponent,
  },
  {
    path: ':id',
    component: FrameComponent,
    data: { location: '1-primary' },
    children: [
      {
        path: ':id',
        data: { location: '1-primary->primary' },
        component: FrameComponent,
        children: [
          {
            path: ':id2_1',
            data: { location: '1-primary->primary' },
            component: FrameComponent,
          },
          {
            path: ':id2:2',
            outlet: 'left',
            data: { location: '1-primary->left' },
            component: FrameComponent,
          },
        ],
      },
      {
        path: ':idBottom',
        outlet: 'bottom',
        title: 'Bottom',
        data: { location: '1-primary->bottom' },
        component: FrameComponent,
      },
      {
        path: ':idTop',
        outlet: 'top',
        data: { location: '1-primary->top' },
        component: FrameComponent,
      },
      {
        path: ':lid',
        outlet: 'left',
        data: { location: '1-primary->left' },
        component: FrameComponent,
        children: [
          {
            path: ':vid',
            data: { location: '1-primary->left->primary' },
            component: FrameComponent,
          },
          {
            path: ':bid',
            outlet: 'bottom',
            data: { location: '1-primary->left->bottom' },
            component: DummyComponent,
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
