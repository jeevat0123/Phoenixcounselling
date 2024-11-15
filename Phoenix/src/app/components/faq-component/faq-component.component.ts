import { Component, Input } from '@angular/core';
interface FAQ {
  question: string;
  answer: string;
}
@Component({
  selector: 'app-faq-component',
  standalone: true,
  imports: [],
  templateUrl: './faq-component.component.html',
  styleUrl: './faq-component.component.css'
})
export class FaqComponentComponent {
  @Input() faqs: FAQ[] = [];
}
