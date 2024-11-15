import { Component, Input } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CalendlyService } from '../../services/calendly/calendly.service';
interface FAQ {
  question: string;
  answer: string;
}
@Component({
  selector: 'app-page-service',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './page-service.component.html',
  styleUrl: './page-service.component.css'
})
export class PageServiceComponent {
  @Input() bannerTittle: string = '';
  @Input() bannerContent: string = '';
  @Input() serviceContent: string = '';
  @Input() imagePath: string = '';
  @Input() whatHappensContent: string = '';
  @Input() benefitsHtml: string = '';
  @Input() faqs: FAQ[] = [];

  constructor(private calendlyService: CalendlyService) { }

  openPopup() {
    this.calendlyService.openCalendlyPopup();
  }
}
