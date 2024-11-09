import { Component } from '@angular/core';
import { BannerComponent } from "../../../components/banner/banner.component";
import { CalendlyService } from '../../../services/calendly/calendly.service';
@Component({
  selector: 'app-familytherapy',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './familytherapy.component.html',
  styleUrl: './familytherapy.component.css'
})
export class FamilytherapyComponent {
  constructor(private calendlyService: CalendlyService) { }

  openPopup() {
    this.calendlyService.openCalendlyPopup();
  }
}
