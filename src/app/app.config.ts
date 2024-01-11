import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"notion-app-integration","appId":"1:521072521202:web:66cbac9075602990a1c56b","databaseURL":"https://notion-app-integration-default-rtdb.firebaseio.com","storageBucket":"notion-app-integration.appspot.com","apiKey":"AIzaSyAQqQjtOwo83_IlNCxHLovmuJQTRW6VsJM","authDomain":"notion-app-integration.firebaseapp.com","messagingSenderId":"521072521202"}))), importProvidersFrom(provideDatabase(() => getDatabase()))
  ]
};
