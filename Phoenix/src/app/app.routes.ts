import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { IndividualcounselingComponent } from './pages/services/individualcounseling/individualcounseling.component';
import { CoupleconsellingComponent } from './pages/services/coupleconselling/coupleconselling.component';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'about', component: AboutUsComponent },
    // services
    { path: 'services/individualcounseling', component: IndividualcounselingComponent },
    { path: 'services/couplecounseling', component: CoupleconsellingComponent },
];
