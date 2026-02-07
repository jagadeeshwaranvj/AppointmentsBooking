import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { jwtInterceptorInterceptor } from './app/interceptors/jwt-interceptor-interceptor';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

bootstrapApplication(App, appConfig)
.catch(err=>console.error(err));
 

