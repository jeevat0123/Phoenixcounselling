import { Component } from '@angular/core';

import { PageServiceComponent } from '../../../components/page-service/page-service.component';
@Component({
  selector: 'app-coupleconselling',
  standalone: true,
  imports: [PageServiceComponent],
  templateUrl: './coupleconselling.component.html',
  styleUrl: './coupleconselling.component.css'
})
export class CoupleconsellingComponent {

  pageServiceData = {
    bannerTittle: 'Couples Counselling',
    bannerContent: 'Discover healing at Phoenix Psychological Services in Chennai. Expert psychotherapist offering personalized online and offline therapy for a balanced and resilient life.',
    serviceContent: 'In a couple counseling session, a therapist helps the partners address relationship issues by providing a safe, neutral space for open communication. The session typically involves identifying and understanding negative patterns among the couple, improving communication skills, and developing strategies to resolve their conflicts. Initially, the therapist works individually with both partners. The therapist facilitates discussions to help both partners express their feelings and needs, fostering empathy and understanding. Techniques such as role-playing, active listening, and problem-solving exercises are often used to strengthen relationship and promote healthier interactions. Additionally, the therapist may assign homework to practice new skills, explore underlying issues affecting the relationship, and set goals for future sessions to track progress and ensure continuous improvement and help the couple to work strategically both on their individual and common goals.',
    imagePath: '../assets/img/couple thery/Couple_Therapy-removebg-preview.png',
    whatHappensContent: 'Couple therapy starts with an early assessment phase where the journey begins with the therapist understanding what brings them to therapy. Couples experience difficulties in many areas such as; emotional connection, intimacy and sexual intimacy, finances, social interactions, household, children and upbringing etc. Post a brief understanding, the area of concerns is further evaluated by getting separate accounts (this ensures objectivity) from both the people involved to delve deeper and see how each one is thinking and feeling. This sets stage for explicit expression of emotions and expectations in a safe space. Once the assessment is complete, interventions may vary depending on the concerns presented and the therapist’s evaluation of the goals set collaboratively with the couple. The therapist may also choose to do individual conversations as required to help enhance the relationship. ',
    benefitsHtml: `
<h4 _ngcontent-ng-c4140733568="">Conflict Resolution: 🔄</h4><p _ngcontent-ng-c4140733568="" class="para-text">Conflict resolution stands as a pivotal and indispensable facet of couples counseling, playing a pivotal role in helping partners to navigate the inevitable disagreements and tensions that arise within any relationship. When couples seek professional guidance and support through couples counseling services, they embark on a journey towards developing the skills, insights, and strategies required to address conflicts in a manner that not only resolves immediate issues but also promotes the overall health and longevity of their partnership. </p><h4 _ngcontent-ng-c4140733568="">Rebuilding Trust: 🤝</h4><p _ngcontent-ng-c4140733568="" class="para-text">Rebuilding trust within the context of couples counseling is an intricate and delicate process, particularly when a relationship has been marred by significant breaches of trust or acts of betrayal. Trust is the cornerstone of any healthy and enduring relationship, and when it is compromised, it can lead to emotional wounds and a sense of vulnerability that can be challenging to overcome. </p><h4 _ngcontent-ng-c4140733568=""> Emotional Connection: ❤️</h4><p _ngcontent-ng-c4140733568="" class="para-text">Emotional counseling is an integral part of couples counseling, focusing on the emotional well-being of both partners and the relationship as a whole. It plays a crucial role in helping couples navigate their emotions, express themselves, and foster a deeper understanding of their own feelings and those of their partner. </p>
  `,
    faqs: [
      {
        question: ' What is couples counseling, and how does it work? ',
        answer: ' Couples counseling is a type of therapy that helps partners in a relationship address issues, improve communication, and work through challenges. A trained therapist facilitates sessions where couples can discuss their concerns, emotions, and goals. Through open dialogue and therapeutic techniques, couples can gain a better understanding of their relationship dynamics and develop strategies for resolving conflicts. '
      },
      {
        question: 'What types of issues can be addressed in couples counseling? ',
        answer: 'Couples counseling can help with a wide range of issues, including communication problems, conflicts, trust issues, infidelity, sexual concerns, differences in values or goals, and life transitions. It\'s not limited to addressing major problems; many couples seek counseling to enhance their relationship and prevent future issues. '
      },
      {
        question: 'How long does couples counseling take, and how often are sessions typically scheduled?  ',
        answer: ' The duration of couples counseling varies based on the specific needs of the couple and the complexity of their issues. Typically, couples may attend weekly sessions, and the overall duration can range from a few weeks to several months. The therapist will work with the couple to establish a suitable schedule. '
      },
      {
        question: 'Is everything discussed in couples counseling confidential? ',
        answer: 'Yes, couples counseling sessions are confidential. Therapists are bound by ethical and legal obligations to maintain client confidentiality. Information shared during sessions is not disclosed to anyone without the consent of both partners, with a few exceptions in cases involving harm to self or others.  '
      },
      {
        question: 'How can we find the right couples counselor for us? ',
        answer: 'Finding the right couples counselor is essential for a successful counseling experience. You can start by seeking recommendations from friends, family, or your primary care physician. Additionally, you can research local therapists, read reviews, and consider factors like their experience, approach, and compatibility with your needs and values. It\'s often helpful to have an initial consultation with a therapist to determine if they are a good fit for your relationship.  '
      },
      // Add more FAQs here
    ]
  };
}
