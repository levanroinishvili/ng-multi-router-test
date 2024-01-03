import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'rt-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private readonly router: Router) {
    console.log(`Routs:`, unfoldRoutes(routes));
  }

  protected go(route: string, asObject = false) {
    console.log(route, asObject);
    if (asObject) {
      let r: unknown;
      try {
        r = new Function(`return ` + route)();
      } catch (error) {
        showError(error, `Cannot hand object to Router. Error:`);
        return;
      }
      try {
        this.router.navigate(r as never);
      } catch (error) {
        showError(error, `Router error:`);
        return;
      }
    } else {
      this.router.navigateByUrl(route);
    }
  }

  protected showRoutes() {
    console.log(`Routs:`, unfoldRoutes(routes));
  }
}

const unfoldRoutes = (routes: unknown): unknown => {
  return Array.isArray(routes) ? routes.map(unfoldRoute) : routes;
};

const unfoldRoute = (route: unknown) => {
  if (
    route &&
    typeof route === 'object' &&
    'loadChildren' in route &&
    typeof route.loadChildren === 'function'
  ) {
    return {
      ...route,
      loadChildren: unfoldRoutes(route.loadChildren()),
    };
  } else {
    return route;
  }
};

function showError(error: unknown, comment: string) {
  console.warn(comment);
  if (
    error &&
    typeof error === 'object' &&
    'message' in error &&
    typeof error.message === 'string'
  ) {
    console.warn(error.message);
    console.error(error);
    alert(comment + '\n\n\n' + error.message);
  } else {
    console.error(error);
    alert(comment + '\n\n\n' + error);
  }
}
