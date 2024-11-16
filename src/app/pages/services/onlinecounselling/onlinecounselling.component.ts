import { Component } from '@angular/core';
import { PageServiceComponent } from '../../../components/page-service/page-service.component';

@Component({
  selector: 'app-onlineCounselling',
  standalone: true,
  imports: [PageServiceComponent],
  templateUrl: './onlinecounselling.component.html',
  styleUrl: './onlinecounselling.component.css'
})
export class OnlineCounsellingComponent {
  pageServiceData = {
    bannerTittle: 'Online Counselling',
    bannerContent: 'Discover healing at Phoenix Psychological Services in Chennai. Expert psychotherapist offering personalized online and offline therapy for a balanced and resilient life.',
    serviceContent: 'Online Counselling, also known as e-Counselling or teletherapy, is a form of therapy conducted via digital platforms, such as video calls, emails, or chat, allowing individuals to receive mental health support remotely. This approach offers convenience and accessibility, making it easier for people to connect with licensed therapists from the comfort of their own homes. In Online Counselling Phoenix Psychological Services address various issues, including anxiety, depression, relationship problems, and more, providing the same professional care as in-person sessions. It’s particularly beneficial for those with busy schedules, mobility issues, or living in remote areas, ensuring they can still access the support they need.',
    imagePath: '../assets/img/online/online.png',
    whatHappensContent: 'Online Counselling involves connecting with a licensed therapist through digital platforms like video calls, chats, or phone sessions. It provides a safe, flexible, and convenient space for individuals to discuss their mental health concerns, work through challenges, and develop coping strategies, all from the comfort of their home.',
    benefitsHtml: `    <ul class="para-text">
        <li>
            <strong>Accessibility</strong>
            <p>Provides easy access to mental health support for people in remote areas or with mobility issues.</p>
        </li>
        <li>
            <strong>Convenience</strong>
            <p>Allows individuals to attend therapy sessions from the comfort of their own homes, reducing travel time and expenses.</p>
        </li>
        <li>
            <strong>Flexibility</strong>
            <p>Offers more flexible scheduling options to accommodate busy lifestyles, including evenings and weekends.</p>
        </li>
        <li>
            <strong>Comfort</strong>
            <p>Creates a safe and comfortable environment where individuals may feel more at ease discussing sensitive issues.</p>
        </li>
        <li>
            <strong>Anonymity</strong>
            <p>Can provide a sense of anonymity, making it easier for some people to open up and share their thoughts.</p>
        </li>
        <li>
            <strong>Continuity of Care</strong>
            <p>Ensures continued access to therapy for those who may relocate or have other life changes.</p>
        </li>
        <li>
            <strong>Cost-Effectiveness</strong>
            <p>Can be more affordable than traditional in-person therapy, as it often eliminates travel costs and overhead for the therapist.</p>
        </li>
    </ul>
    <p class="para-text">These benefits make online Counselling a versatile and accessible option for receiving mental health support.</p>`,
    faqs: [
      {
        question: 'Is online Counselling as effective as in-person therapy?',
        answer: 'Yes, studies show that online Counselling is just as effective as traditional therapy for many mental health issues, including anxiety and depression.'
      },
      {
        question: 'What tools or devices do I need for online Counselling?',
        answer: 'You typically need a stable internet connection, a smartphone, tablet, or computer, and a private, quiet space for your sessions.'
      },
      {
        question: 'How do I ensure privacy during online Counselling sessions?',
        answer: 'Choose a secure, encrypted platform recommended by your therapist, and ensure you are in a private, distraction-free environment during sessions.'
      },
      // Add more FAQs here
    ]
  };
}
