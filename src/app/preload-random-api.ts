import { Data, PreloadingStrategy, Route } from '@angular/router';
import { Observable, from, tap } from 'rxjs';

const delay = 2000;
const yes = `https://httpstat.us/200?sleep=${delay}`;
const no = `https://httpstat.us/404?sleep=${delay}`;

function randomStatus(params: Data | undefined) {
  const fullParams = Object.assign({ question: 'preload' }, params);
  const suffix = Object.entries(fullParams)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  const url = Math.random() < 0.5 ? yes : no;
  return fetch(url + '&' + suffix).then(response => response.ok);
}

export class PreloadRandomApi extends PreloadingStrategy {
  override preload(
    route: Route,
    fn: () => Observable<unknown>
  ): Observable<unknown> {
    return from(randomStatus(route.data)).pipe(tap(ok => ok && fn()));
  }
}
