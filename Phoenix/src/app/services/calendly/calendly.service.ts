import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendlyService {
  openCalendlyPopup(url: string = 'https://calendly.com/phoenix_counselling/phoenix-counselling'): void {
    const calendly = (window as any).Calendly as { initPopupWidget: (options: { url: string }) => void };
    if (calendly) {
      calendly.initPopupWidget({ url });
    } else {
      console.error('Calendly script not loaded');
    }
  }
}
