import { Component } from '@angular/core';
import { PageServiceComponent } from '../../../components/page-service/page-service.component';

@Component({
  selector: 'app-grouptherapy',
  standalone: true,
  imports: [PageServiceComponent],
  templateUrl: './grouptherapy.component.html',
  styleUrl: './grouptherapy.component.css'
})
export class GrouptherapyComponent {

  pageServiceData = {
    bannerTittle: 'Group therapy',
    bannerContent: 'Discover healing at Phoenix Psychological Services in Chennai. Expert psychotherapist offering personalized online and offline therapy for a balanced and resilient life.',
    serviceContent: 'Group therapy is a form of psychotherapy where a small number of individuals with similar issues or goals come together under the guidance of a trained therapist to discuss and work through their challenges. In this therapy we provide a supportive environment where members can share experiences, offer and receive feedback, and learn from one another. The group dynamic fosters a sense of community and belonging, reducing feelings of isolation. It also allows participants to practice social skills, gain different perspectives, and develop coping strategies. Group therapy can be particularly beneficial for addressing issues such as anxiety, depression, grief, and social skills development.',
    imagePath: '../assets/img/Group/Group-therapy-removebg-preview.png',
    whatHappensContent: 'In group therapy, participants come together in a safe and supportive environment to share experiences, challenges, and progress. Guided by a trained therapist, members engage in open discussions, learn coping strategies, and provide mutual support. Sessions may include exercises like role-playing or problem-solving, promoting self-awareness and skill-building. Over time, the group fosters trust, connection, and personal growth, helping participants feel understood and empowered.',
    benefitsHtml: `
    <ul class = "para-text">
        <li><strong>Support System</strong>: <p>Provides a network of peers who understand and share similar experiences.</p></li>
        <li><strong>Perspective Sharing</strong>:<p> Offers diverse viewpoints and feedback from group members.</p></li>
        <li><strong>Reduced Isolation</strong>:<p> Helps individuals feel less alone by connecting with others facing similar challenges.</p></li>
        <li><strong>Improved Social Skills</strong>:<p> Provides a safe environment to practice social interactions and communication skills.</li>
        <li><strong>Cost-Effective</strong>:<p> Often more affordable than individual therapy.</p></li>
        <li><strong>Enhanced Self-Awareness</strong>:<p> Encourages self-reflection and insight through group discussions.</p></li>
        <li><strong>Motivation and Accountability</strong>:<p> Encourages members to stay committed to their goals.</p></li>
        <li><strong>Resource Sharing</strong>: <p>Allows exchange of coping strategies and practical advice.</p></li>
        <li><strong>Therapist Guidance</strong>: <p>Provides professional support and intervention from a trained therapist.</p></li>
    </ul>
    <p class="para-text">These benefits contribute to the overall well-being and personal growth of group therapy participants.</p>
  `,
    faqs: [
      {
        question: 'What is group counselling, and how does it differ from individual counselling?',
        answer: 'Group counselling is a form of therapy where a small group of individuals, typically led by a trained therapist, come together to discuss and address their concerns and challenges. It differs from individual counselling as it involves sharing experiences and receiving support from peers in addition to the therapist.'
      },
      {
        question: 'What types of issues can be addressed in group counselling?',
        answer: 'Group counselling can be beneficial for a wide range of issues, including anxiety, depression, addiction, grief, relationship difficulties, stress, and personal growth. Different groups may focus on specific themes or concerns.'
      },
      {
        question: 'How large are group counselling sessions, and who else will be in the group?',
        answer: 'Group sizes can vary, but they typically consist of 6 to 12 participants. The composition of the group may vary, with members having different backgrounds and concerns, offering diverse perspectives and support.'
      },
      {
        question: 'Is what I share in group counselling confidential, and what about privacy?',
        answer: 'Group counselling sessions are typically confidential, and participants are expected to respect each other\'s privacy. The therapist will establish ground rules for confidentiality at the beginning of the group. However, there may be exceptions, such as concerns for the safety of oneself or others, which the therapist would need to address.'
      },
      {
        question: 'How long does group counselling last, and how often are the sessions?',
        answer: 'The duration and frequency of group counselling sessions can vary. Some groups may be time-limited, spanning a specific number of sessions (e.g., 6-8 weeks), while others may be ongoing. The frequency of sessions may range from weekly to monthly, depending on the goals and needs of the group.'
      },

      // Add more FAQs here
    ]
  };



}
