import { HttpClient } from '@angular/common/http';
import { Inject, InjectionToken, PLATFORM_ID } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, from, tap } from 'rxjs';

export class PreloadAskUser implements PreloadingStrategy {
  constructor(
    httpClient: HttpClient,
    @Inject(PLATFORM_ID)
    platformId: typeof PLATFORM_ID extends InjectionToken<infer T> ? T : never
  ) {
    console.log(httpClient);
    console.log(`PLATFORM_ID injected:`, platformId, typeof platformId);
  }

  preload(route: Route, fn: () => Observable<unknown>): Observable<unknown> {
    return from(
      new Promise<boolean>(resolve =>
        resolve(
          confirm(
            `Preload route?\n\nRoute path: ${
              route.path
            }\n\nRoute data: ${JSON.stringify(route.data)}`
          )
        )
      )
    ).pipe(tap(preload => preload && fn())); // Just need to call fn. Don't even need to subscribe the resulting observable
  }
}
