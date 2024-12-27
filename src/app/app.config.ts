import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { UserReducer } from '../store/user/user.reducer';
import { provideEffects } from '@ngrx/effects';
import { UserEffects } from '../store/user/user.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),

    provideStore({user:UserReducer}),
    provideState({name:'user' , reducer:UserReducer}),
    provideEffects(UserEffects)
  
  
  ]
};
