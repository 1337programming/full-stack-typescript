import { provideRouter, RouterConfig } from '@angular/router';
import {SamplePage} from './components/sample-page/sample-page.component';

export const routes: RouterConfig = [
  {path: '', component: SamplePage}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
