import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideIcons } from '@ng-icons/core';
import { heroPlus, heroXMark, heroCog6Tooth, heroBell, heroUser, heroTrash, heroPencil, heroMagnifyingGlass } from '@ng-icons/heroicons/outline';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideIcons({
      heroMagnifyingGlass,
      heroPlus,
      heroXMark,
      heroCog6Tooth,
      heroBell,
      heroUser,
      heroTrash,
      heroPencil,
    }),
  ],
};
