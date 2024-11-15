import { Component } from '@angular/core';
import { PageServiceComponent } from '../../../components/page-service/page-service.component';

@Component({
  selector: 'app-mentalhealthadvocacy',
  standalone: true,
  imports: [PageServiceComponent],
  templateUrl: './mentalhealthadvocacy.component.html',
  styleUrl: './mentalhealthadvocacy.component.css'
})
export class MentalhealthadvocacyComponent {
  pageServiceData = {
    bannerTittle: 'Mental Health Advocacy',
    bannerContent: 'Discover healing at Phoenix Psychological Services in Chennai. Expert psychotherapist offering personalized online and offline therapy for a balanced and resilient life.',
    serviceContent: 'Mental health advocacy involves efforts to promote the rights of individuals with mental health conditions and to improve mental health services and support. Advocates work to raise awareness, reduce stigma, and influence policies and practices to ensure better mental health outcomes for all. This can include public education campaigns, lobbying for legislative changes, and supporting individuals in accessing necessary care and resources. By championing mental health issues, advocates help create a more understanding and inclusive society where mental health is prioritized and individuals are empowered to seek help without fear of discrimination.',
    imagePath: '../assets/img/mentalhealth/mentalhealth.png',
    whatHappensContent: 'Mental health advocacy involves raising awareness about mental health issues, reducing stigma, and promoting access to care and support. Advocates work to influence policies, foster community support networks, and empower individuals to prioritize mental well-being. These efforts help create an inclusive society where mental health is openly discussed and supported.',
    benefitsHtml: `<ul class="para-text">
        <li>
            <strong>Increased Awareness</strong>
            <p>Raises public understanding of mental health issues, leading to more informed and empathetic communities.</p>
        </li>
        <li>
            <strong>Reduced Stigma</strong>
            <p>Helps combat the negative stereotypes and discrimination associated with mental health conditions, encouraging more people to seek help.</p>
        </li>
        <li>
            <strong>Improved Access to Care</strong>
            <p>Advocates work to ensure that individuals have access to affordable and quality mental health services.</p>
        </li>
        <li>
            <strong>Policy Influence</strong>
            <p>Drives changes in policies and legislation to better support mental health initiatives and protect the rights of those with mental health conditions.</p>
        </li>
        <li>
            <strong>Empowerment</strong>
            <p>Gives individuals the tools and knowledge to advocate for their own mental health needs and those of others.</p>
        </li>
        <li>
            <strong>Support Networks</strong>
            <p>Fosters the development of support groups and networks for individuals and their families.</p>
        </li>
        <li>
            <strong>Resource Allocation</strong>
            <p>Promotes better allocation of resources towards mental health research, treatment, and services.</p>
        </li>
        <li>
            <strong>Community Building</strong>
            <p>Strengthens community ties by bringing people together to support a common cause.</p>
        </li>
    </ul>
    <p class="para-text">These benefits contribute to creating a more inclusive, supportive, and understanding society, where mental health is prioritized and individuals can thrive without fear of discrimination.</p>`,
    faqs: [
      {
        question: 'Why is mental health advocacy important?',
        answer: 'Advocacy raises awareness, reduces stigma, and ensures better access to mental health resources and services, helping individuals live healthier, more balanced lives.'
      },
      {
        question: 'How can I get involved in mental health advocacy?',
        answer: 'You can participate by joining advocacy groups, sharing personal experiences, educating others about mental health, and supporting mental health policies and initiatives.'
      },
      {
        question: 'Who benefits from mental health advocacy?',
        answer: 'Everyone benefits, including individuals with mental health conditions, their families, communities, and society as a whole, by creating a more informed and supportive environment.'
      },
      // Add more FAQs here
    ]
  };
}
