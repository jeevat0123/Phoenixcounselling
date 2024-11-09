import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { IndividualcounselingComponent } from './pages/services/individualcounseling/individualcounseling.component';
import { CoupleconsellingComponent } from './pages/services/coupleconselling/coupleconselling.component';
import { FamilytherapyComponent } from './pages/services/familytherapy/familytherapy.component';
import { AdolescentcounselingComponent } from './pages/services/adolescentcounseling/adolescentcounseling.component';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'about', component: AboutUsComponent },
    // services
    { path: 'services/individualcounseling', component: IndividualcounselingComponent },
    { path: 'services/couplecounseling', component: CoupleconsellingComponent },
    { path: 'services/familytherapy', component: FamilytherapyComponent },
    { path: 'services/adolescentcounseling', component: AdolescentcounselingComponent },
];
