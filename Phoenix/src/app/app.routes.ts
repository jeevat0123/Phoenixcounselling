import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { IndividualcounselingComponent } from './pages/services/individualcounseling/individualcounseling.component';
import { CoupleconsellingComponent } from './pages/services/coupleconselling/coupleconselling.component';
import { FamilytherapyComponent } from './pages/services/familytherapy/familytherapy.component';
import { AdolescentcounselingComponent } from './pages/services/adolescentcounseling/adolescentcounseling.component';
import { GrouptherapyComponent } from './pages/services/grouptherapy/grouptherapy.component';
import { HypnotherapyComponent } from './pages/services/hypnotherapy/hypnotherapy.component';
import { EpaComponent } from './pages/services/epa/epa.component';
import { TrainingsandworkshopsComponent } from './pages/services/trainingsandworkshops/trainingsandworkshops.component';
import { MentalhealthadvocacyComponent } from './pages/services/mentalhealthadvocacy/mentalhealthadvocacy.component';
import { OnlinecounselingComponent } from './pages/services/onlinecounseling/onlinecounseling.component';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'about', component: AboutUsComponent },
    // services
    { path: 'services/individualcounseling', component: IndividualcounselingComponent },
    { path: 'services/couplecounseling', component: CoupleconsellingComponent },
    { path: 'services/familytherapy', component: FamilytherapyComponent },
    { path: 'services/adolescentcounseling', component: AdolescentcounselingComponent },
    { path: 'services/grouptherapy', component: GrouptherapyComponent },
    { path: 'services/hypnotherapy', component: HypnotherapyComponent },
    { path: 'services/epa', component: EpaComponent },
    { path: 'services/trainingsandworkshops', component: TrainingsandworkshopsComponent },
    { path: 'services/mentalhealthadvocacy', component: MentalhealthadvocacyComponent },
    { path: 'services/onlinecounseling', component: OnlinecounselingComponent },
];
