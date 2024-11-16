import { Component } from '@angular/core';
import { PageServiceComponent } from '../../../components/page-service/page-service.component';

@Component({
  selector: 'app-epa',
  standalone: true,
  imports: [PageServiceComponent],
  templateUrl: './epa.component.html',
  styleUrl: './epa.component.css'
})
export class EpaComponent {
  pageServiceData = {
    bannerTittle: 'Corporate wellness programs (EAP)',
    bannerContent: 'Discover healing at Phoenix Psychological Services in Chennai. Expert psychotherapist offering personalized online and offline therapy for a balanced and resilient life.',
    serviceContent: 'Corporate wellness programs, often known as Employee Assistance Programs (EAP), are employer-sponsored initiatives designed to support the physical, mental, and emotional well-being of employees. These programs offer a range of services, including Counselling, stress management, health assessments, fitness programs, and workshops on topics like nutrition and work-life balance. EAPs may also provide support for personal issues such as financial planning, substance abuse, and family Counselling. By promoting a healthier and more supportive work environment, corporate wellness programs aim to enhance employee productivity, job satisfaction, and overall well-being, leading to a more engaged and resilient workforce.',
    imagePath: '../assets/img/EPA/eap.png',
    whatHappensContent: 'Corporate wellness programs, or Employee Assistance Programs (EAP), provide resources and support to employees for improving their physical, mental, and emotional well-being. These programs include health screenings, Counselling, fitness activities, stress management workshops, and work-life balance support. By addressing personal and professional challenges, they foster a healthier, more productive workforce and promote a positive workplace culture.',
    benefitsHtml: `
     <ul class="para-text">
        <li>
            <strong>Improved Health</strong>
            <p>Encourages healthier lifestyles, reducing the risk of chronic illnesses and absenteeism.</p>
        </li>
        <li>
            <strong>Enhanced Mental Well-Being</strong>
            <p>Provides support for stress, anxiety, and other mental health issues, promoting a more balanced mental state.</p>
        </li>
        <li>
            <strong>Increased Productivity</strong>
            <p>Healthy and happy employees are more focused, efficient, and productive at work.</p>
        </li>
        <li>
            <strong>Reduced Absenteeism</strong>
            <p>Helps lower the rates of sick leave and absenteeism by addressing health and wellness proactively.</p>
        </li>
        <li>
            <strong>Better Employee Engagement</strong>
            <p>Increases job satisfaction and morale, leading to higher employee engagement and retention.</p>
        </li>
        <li>
            <strong>Cost Savings</strong>
            <p>Reduces healthcare costs and expenses related to employee turnover.</p>
        </li>
        <li>
            <strong>Work-Life Balance</strong>
            <p>Supports employees in managing personal and professional life, improving overall quality of life.</p>
        </li>
        <li>
            <strong>Positive Work Culture</strong>
            <p>Fosters a supportive and positive workplace environment, enhancing team dynamics and collaboration.</p>
        </li>
    </ul>
    <p class="para-text">These benefits demonstrate the significant impact that corporate wellness programs can have on the overall health and success of an organization.</p>
    `,
    faqs: [
      {
        question: 'What services are typically included in a corporate wellness program?',
        answer: 'Corporate wellness programs often include health assessments, fitness classes, stress management workshops, mental health Counselling, nutrition advice, and work-life balance resources.'
      },
      {
        question: 'Are Employee Assistance Programs (EAP) confidential?',
        answer: 'Yes, EAP services are confidential. Employees can seek support without their personal information being disclosed to their employer, ensuring privacy and trust.'
      },
      {
        question: 'How do corporate wellness programs benefit employers?',
        answer: 'These programs boost employee productivity, reduce absenteeism, lower healthcare costs, and improve overall job satisfaction, resulting in better retention and a positive workplace culture.'
      },
      // Add more FAQs here
    ]
  };
}
