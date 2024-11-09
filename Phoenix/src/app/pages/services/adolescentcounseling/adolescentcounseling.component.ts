import { Component } from '@angular/core';
import { BannerComponent } from "../../../components/banner/banner.component";
import { CalendlyService } from '../../../services/calendly/calendly.service';
@Component({
  selector: 'app-adolescentcounseling',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './adolescentcounseling.component.html',
  styleUrl: './adolescentcounseling.component.css'
})
export class AdolescentcounselingComponent {

  constructor(private calendlyService: CalendlyService) { }

  openPopup() {
    this.calendlyService.openCalendlyPopup();
  }
}
