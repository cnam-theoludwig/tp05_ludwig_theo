import type { ApplicationConfig } from "@angular/core"
import { provideZoneChangeDetection } from "@angular/core"
import { provideRouter } from "@angular/router"

import { provideHttpClient } from "@angular/common/http"
import { routes } from "./app.routes"

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
}