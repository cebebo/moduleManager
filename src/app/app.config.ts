import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"module-manager-fe079","appId":"1:596734789838:web:a4f2b450ef07c4579f689f","storageBucket":"module-manager-fe079.firebasestorage.app","apiKey":"AIzaSyB1a9qQfUMFz8RYeaUPaJwvDD7cZM8NhT0","authDomain":"module-manager-fe079.firebaseapp.com","messagingSenderId":"596734789838","measurementId":"G-6M7RP9XF4T"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"module-manager-fe079","appId":"1:596734789838:web:a4f2b450ef07c4579f689f","storageBucket":"module-manager-fe079.firebasestorage.app","apiKey":"AIzaSyB1a9qQfUMFz8RYeaUPaJwvDD7cZM8NhT0","authDomain":"module-manager-fe079.firebaseapp.com","messagingSenderId":"596734789838","measurementId":"G-6M7RP9XF4T"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
