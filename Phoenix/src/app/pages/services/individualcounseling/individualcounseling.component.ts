import { Component } from '@angular/core';
import { BannerComponent } from "../../../components/banner/banner.component";
import { CalendlyService } from '../../../services/calendly/calendly.service';

@Component({
  selector: 'app-individualcounseling',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './individualcounseling.component.html',
  styleUrl: './individualcounseling.component.css'
})
export class IndividualcounselingComponent {

  constructor(private calendlyService: CalendlyService) { }

  openPopup() {
    this.calendlyService.openCalendlyPopup();
  }
}
