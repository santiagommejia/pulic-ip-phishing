import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebaseConfig))), 
    importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, 
    importProvidersFrom(provideFunctions(() => getFunctions())), 
    ]
};
