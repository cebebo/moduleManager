import { Routes } from '@angular/router';
import { ChooseModuleComponent } from './components/choose-module/choose-module.component';
import { CreateModuleComponent } from './components/create-module/create-module.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'vote', component: ChooseModuleComponent},
    { path: 'generate', component: CreateModuleComponent},
];
