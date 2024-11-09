import { Component } from '@angular/core';

import { BannerComponent } from "../../../components/banner/banner.component";
import { CalendlyService } from '../../../services/calendly/calendly.service';
@Component({
  selector: 'app-coupleconselling',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './coupleconselling.component.html',
  styleUrl: './coupleconselling.component.css'
})
export class CoupleconsellingComponent {

  constructor(private calendlyService: CalendlyService) { }

  openPopup() {
    this.calendlyService.openCalendlyPopup();
  }
}
