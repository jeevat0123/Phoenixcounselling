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
        question: 'What is couples counseling, and how does it work?',
        answer: 'Couples counseling is a type of therapy that helps partners in a relationship address issues, improve communication, and work through challenges. A trained therapist facilitates sessions where couples can discuss their concerns, emotions, and goals. Through open dialogue and therapeutic techniques, couples can gain a better understanding of their relationship dynamics and develop strategies for resolving conflicts.'
      },
      {
        question: 'What types of issues can be addressed in couples counseling?',
        answer: 'Couples counseling can help with a wide range of issues, including communication problems, conflicts, trust issues, infidelity, sexual concerns, differences in values or goals, and life transitions. It\'s not limited to addressing major problems; many couples seek counseling to enhance their relationship and prevent future issues.'
      },
      {
        question: 'How long does couples counseling take, and how often are sessions typically scheduled?',
        answer: 'The duration of couples counseling varies based on the specific needs of the couple and the complexity of their issues. Typically, couples may attend weekly sessions, and the overall duration can range from a few weeks to several months. The therapist will work with the couple to establish a suitable schedule.'
      },
      {
        question: 'Is everything discussed in couples counseling confidential?',
        answer: 'Yes, couples counseling sessions are confidential. Therapists are bound by ethical and legal obligations to maintain client confidentiality. Information shared during sessions is not disclosed to anyone without the consent of both partners, with a few exceptions in cases involving harm to self or others.'
      },
      {
        question: 'How can we find the right couples counselor for us?',
        answer: 'Finding the right couples counselor is essential for a successful counseling experience. You can start by seeking recommendations from friends, family, or your primary care physician. Additionally, you can research local therapists, read reviews, and consider factors like their experience, approach, and compatibility with your needs and values. It\'s often helpful to have an initial consultation with a therapist to determine if they are a good fit for your relationship.'
      }
      // Add more FAQs here
    ]
  };



}
