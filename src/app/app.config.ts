import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from './car-generated';
import { firebaseConfig } from '../../config/firebase_config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideRouter(routes),
    provideFirebaseApp(() => {
      const app = initializeApp(firebaseConfig);
      // Need to initialize Data Connect with connectorConfig
      const dataConnect = getDataConnect(app, connectorConfig);
      connectDataConnectEmulator(dataConnect, "localhost", 9399);
      return app;
    }),
    provideAuth(() => getAuth())
  ]
};
