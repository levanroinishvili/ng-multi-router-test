import { ApplicationConfig, PLATFORM_ID } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withPreloading,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { PreloadAskUser } from './preload-ask-user';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    {
      provide: PreloadAskUser,
      useClass: PreloadAskUser,
      deps: [HttpClient, PLATFORM_ID],
    },
    provideRouter(
      routes,
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withComponentInputBinding(),
      withPreloading(PreloadAskUser)
    ),
    provideClientHydration(),
  ],
};
