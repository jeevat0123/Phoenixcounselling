import { Component } from '@angular/core';
import { PageServiceComponent } from '../../../components/page-service/page-service.component';

@Component({
  selector: 'app-trainingsandworkshops',
  standalone: true,
  imports: [PageServiceComponent],
  templateUrl: './trainingsandworkshops.component.html',
  styleUrl: './trainingsandworkshops.component.css'
})
export class TrainingsandworkshopsComponent {

  pageServiceData = {
    bannerTittle: 'Trainings and Workshops',
    bannerContent: 'Discover healing at Phoenix Psychological Services in Chennai. Expert psychotherapist offering personalized online and offline therapy for a balanced and resilient life.',
    serviceContent: 'Trainings and workshops are structured sessions where participants gather to learn, engage, and develop specific skills or knowledge under the guidance of experts. These sessions typically include a combination of presentations, interactive discussions, practical activities, and hands-on exercises. Participants may engage in role-playing, group work, and skill development tasks, all designed to reinforce the session\'s objectives. The atmosphere is often collaborative and supportive, encouraging participants to share experiences, ask questions, and reflect on their learning. By the end of the session, participants leave with new insights, practical tools, and actionable plans to apply in their personal or professional lives.',
    imagePath: '../assets/img/tranning/tranning.png',
    whatHappensContent: 'Trainings and workshops involve interactive sessions where participants learn new skills, gain knowledge, and engage in hands-on activities. These sessions often include expert-led discussions, practical exercises, and group collaborations to foster learning, problem-solving, and personal development in a dynamic and engaging environment.',
    benefitsHtml: `
    <ul class="para-text">
        <li>
            <strong>Skill Development</strong>
            <p>Participants acquire new skills and improve existing ones, leading to increased competence and confidence.</p>
        </li>
        <li>
            <strong>Knowledge Enhancement</strong>
            <p>Provides up-to-date information and insights on specific topics, keeping participants informed and knowledgeable.</p>
        </li>
        <li>
            <strong>Networking Opportunities</strong>
            <p>Facilitates connections with peers, industry experts, and professionals, fostering valuable relationships and collaborations.</p>
        </li>
        <li>
            <strong>Improved Performance</strong>
            <p>Enhances job performance and productivity by equipping participants with practical tools and techniques.</p>
        </li>
        <li>
            <strong>Increased Motivation</strong>
            <p>Encourages motivation and engagement by providing a refreshing break from routine tasks and inspiring new perspectives.</p>
        </li>
        <li>
            <strong>Problem-Solving Abilities</strong>
            <p>Develops critical thinking and problem-solving skills through interactive and hands-on activities.</p>
        </li>
        <li>
            <strong>Adaptability and Innovation</strong>
            <p>Promotes adaptability and innovative thinking by exposing participants to new ideas and methodologies.</p>
        </li>
        <li>
            <strong>Personal Growth</strong>
            <p>Supports personal development, including improved communication, leadership, and teamwork skills.</p>
        </li>
        <li>
            <strong>Better Job Satisfaction</strong>
            <p>Increases job satisfaction and morale by investing in employees' professional development.</p>
        </li>
        <li>
            <strong>Organizational Benefits</strong>
            <p>Contributes to the overall success and growth of the organization by fostering a knowledgeable and skilled workforce.</p>
        </li>
    </ul>
    <p class="para-text">These benefits make trainings and workshops valuable investments in personal and professional development, leading to improved performance, satisfaction, and growth.</p>`,
    faqs: [
      {
        question: 'What is the purpose of a training or workshop?',
        answer: 'The purpose is to enhance skills, share knowledge, and foster personal and professional growth through interactive and practical learning experiences.'
      },
      {
        question: 'Who can attend trainings and workshops?',
        answer: 'Trainings and workshops are open to anyone looking to improve their skills and knowledge. They are often tailored for specific groups, such as professionals, students, or industry experts.'
      },
      {
        question: 'How are workshops different from regular training sessions?',
        answer: 'Workshops are typically more interactive and hands-on, focusing on practical activities and real-world applications, while training sessions may include a mix of lectures, discussions, and theoretical learning.'
      },
      // Add more FAQs here
    ]
  };
}
