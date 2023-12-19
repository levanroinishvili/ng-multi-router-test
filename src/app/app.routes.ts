import { Routes } from '@angular/router';
import { jokeResolver } from './joke/joke.resolver';
import { BComponent } from './b/b.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'view/joke',
  },
  {
    path: 'view/joke',
    title: 'View Joke',
    loadComponent: () =>
      import('./joke/joke.component').then(m => m.JokeComponent),
    resolve: { joke: jokeResolver },
    loadChildren: () => [
      {
        path: 'analysis',
        title: 'Joke Sub Analysis',
        loadComponent: () =>
          import('./joke-analysis/joke-analysis.component').then(
            m => m.JokeAnalysisComponent
          ),
      },
    ],
  },
  {
    path: 'view/joke/analysis',
    title: 'Direct Joke Analysis',
    loadComponent: () =>
      import('./joke-analysis/joke-analysis.component').then(
        m => m.JokeAnalysisComponent
      ),
  },

  /* ---------------------- Sidebar --------------------------- */
  {
    path: '',
    outlet: 'sidebar',
    pathMatch: 'prefix',
    redirectTo: 'menu',
  },
  {
    path: 'menu',
    outlet: 'sidebar',
    loadComponent: () =>
      import('./menu/menu.component').then(m => m.MenuComponent),
    canActivate: [() => true],
    canActivateChild: [() => Promise.resolve(true)],
    loadChildren: () => [
      {
        path: '',
        redirectTo: 'forbidden',
        pathMatch: 'full',
      },
      {
        path: 'forbidden',
        loadComponent: () =>
          import('./menu-forbidden/menu-forbidden.component').then(
            m => m.MenuForbiddenComponent
          ),
      },
      {
        path: 'user',
        loadComponent: () =>
          import('./menu-user/menu-user.component').then(
            m => m.MenuUserComponent
          ),
      },
      {
        path: 'super-user',
        loadComponent: () =>
          import('./menu-superuser/menu-superuser.component').then(
            m => m.MenuSuperuserComponent
          ),
        loadChildren: () => [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'warning',
          },
          {
            path: 'warning',
            loadComponent: () =>
              import('./a/a.component').then(m => m.AComponent),
          },
          {
            path: '',
            outlet: 'footer',
            pathMatch: 'full',
            redirectTo: 'footer',
          },
          {
            path: 'footer',
            outlet: 'footer',
            component: BComponent,
          },
        ],
      },
      //   {},
    ],
  },

  /* -------------------------------- Popup ------------------------ */
  {
    path: '',
    outlet: 'popup',
    pathMatch: 'full',
    redirectTo: 'chat',
  },
  {
    path: 'chat',
    outlet: 'popup',
    title: 'Chat',
    loadComponent: () =>
      import('./chat/chat.component').then(m => m.ChatComponent),
  },
];
