import { Component } from '@angular/core';
import { PageServiceComponent } from '../../../components/page-service/page-service.component';

@Component({
  selector: 'app-individualCounselling',
  standalone: true,
  imports: [PageServiceComponent],
  templateUrl: './individualcounselling.component.html',
  styleUrl: './individualcounselling.component.css'
})
export class IndividualCounsellingComponent {


  pageServiceData = {
    bannerTittle: 'Individual Counselling',
    bannerContent: ' Discover healing at Phoenix Psychological Services in Chennai. Expert psychotherapist offering personalized online and offline therapy for a balanced and resilient life.',
    serviceContent: 'In an Individual Counselling session, we listen completely and provide a safe, confidential space for clients to vent out , and explore their thoughts, feelings, and behaviors without any judgement. The process begins with an initial assessment to understand the client\'s background and goals. Building a trusting therapeutic relationship is crucial, allowing for open communication and empathy . Then we help our clients to understand their core issues, identify specific patterns, intense negative emotions, and help them to develop coping strategies accordingly. Cognitive restructuring is one technique used to change negative thought patterns, while emotional processing aids in expressing and understanding emotions. We use an eclectic approach to help the clients based on their needs and issues. Homework assignments and regular progress reviews are done to ensure the application of their learned skills. The therapy concludes with preparation for termination(end of therapy) and potential follow-up sessions, all while maintaining strict confidentiality and ethical practice.',
    imagePath: '../assets/img/individual-1.png',
    whatHappensContent: 'Individual therapy, or one-on-one counselling, involves working with a therapist to address personal psychological, behavioral, emotional, or psychosomatic issues and improve overall mental health. It begins with taking the clients case history and an initial assessment to create a personalized treatment plan. Regular sessions follow, where the client discusses their thoughts and feelings. The therapist uses an eclectic approach, incorporating techniques like CBT, REBT, psychodynamic therapy, and hypnotherapy, to tailor the treatment to the clients specific needs and goals. Confidential and non-judgmental discussions help the client develop co ping strategies and self-awareness. Progress is reviewed weekly to ensure the therapy remains effective. Therapy can be short-term or long-term, aiming to enhance the clients mental health, relationships, and personal growth. ',
    benefitsHtml: `

    <p class="para-text">Individual counselling offers numerous benefits, including <strong>personalized therapy</strong> tailored to your specific needs and goals. It provides a <strong>safe</strong>  and <strong>confidential space</strong> to explore your thoughts, feelings, and behaviors, helping you gain <strong>self-awareness</strong> and insight into underlying issues. Counselling can improve communication skills, enhance emotional regulation, and develop effective coping strategies for managing stress, anxiety, and other mental health concerns. It also fosters <strong>personal growth </strong>personal growth, empowers you to make healthier choices, and promotes overall well-being by addressing and resolving personal challenges.</p>
    <ul>
      <li><p class="para-text" >Personalized Therapy 🛋️</p></li>
      <li><p class="para-text" >Safe and Confidential Space to Vent Out 🔒🗣️</p></li>
      <li><p class="para-text" >Gain Self-awareness 🧠💡</p></li>
      <li><p class="para-text" >Foster Personal Growth 🌱🚀</p></li>
    </ul>

  `,
    faqs: [
      {
        question: 'What Happens During One On One Individual Therapy Counselling In Chennai?',
        answer: 'If you have selection for a specific consultant, this may escalate the time you have to wait for your first appointment. The total time required is approximately 90 minutes, including completing computer forms, treatment time, and arranging follow-up appointments, so be sure how to keep this in mind when planning your work. It would be great if you come early to allow enough time to complete the required forms. Documents cover a human and clinical history form, a medical agreement, a medical permit, and a notification of privacy practices. Your doctor will find information about your current concerns, relevant history, and goals. '
      },
      {
        question: 'What Happens During One-Time Individual Therapy In Chennai?',
        answer: ' It would be best if you arrived early to allow enough time to complete the required forms. Documents include a human and clinical history form, a medical agreement, a medical permit, and a notification of privacy practices. Your doctor will find information about your current concerns, relevant history, and goals. '
      },
      {
        question: 'What happens in the future when you participate in Individual Counselling services? ',
        answer: 'At subsequent, you will meet with your advisor for approximately 45 minutes, scheduled according to the accept schedule. If you would like additional advice than what we can offer you, we will work with you to find a doctor in the local community. At first, you will work with your doctor to set goals for your Counselling sessions. Open guidance to your Counselling experience will hang on the problems you bring to Counselling, your doctor\'s perspective, and the goals you set for your work together. '
      },
      // Add more FAQs here
    ]
  };
}
