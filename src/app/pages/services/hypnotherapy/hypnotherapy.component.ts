import { Component } from '@angular/core';
import { PageServiceComponent } from '../../../components/page-service/page-service.component';

@Component({
  selector: 'app-hypnotherapy',
  standalone: true,
  imports: [PageServiceComponent],
  templateUrl: './hypnotherapy.component.html',
  styleUrl: './hypnotherapy.component.css'
})
export class HypnotherapyComponent {
  pageServiceData = {
    bannerTittle: 'Hypnotherapy',
    bannerContent: 'Discover healing at Phoenix Psychological Services in Chennai. Expert psychotherapist offering personalized online and offline therapy for a balanced and resilient life.',
    serviceContent: 'Hypnotherapy is a type of alternative therapy that uses guided relaxation, intense concentration, and focused attention to achieve a heightened state of awareness called a trance. During this state, individuals are more open to suggestions and can explore thoughts, feelings, and memories that might be hidden from their conscious mind. Hypnotherapy is used to help manage various issues, including anxiety, phobias, addiction, pain management, and stress. We guide the individuals through therapeutic techniques to promote positive changes in behavior and thought patterns, leveraging the power of the subconscious mind.',
    imagePath: '../assets/img/hipno/hipno.png',
    whatHappensContent: 'In group therapy, participants come together in a safe and supportive environment to share experiences, challenges, and progress. Guided by a trained therapist, members engage in open discussions, learn coping strategies, and provide mutual support. Sessions may include exercises like role-playing or problem-solving, promoting self-awareness and skill-building. Over time, the group fosters trust, connection, and personal growth, helping participants feel understood and empowered.',
    benefitsHtml: `<ul class="para-text">
        <li>
            <strong>Stress and Anxiety Reduction</strong>
            <p>Helps manage stress and reduce anxiety by promoting relaxation and altering negative thought patterns.</p>
        </li>
        <li>
            <strong>Pain Management</strong>
            <p>Effective in managing chronic pain conditions, such as migraines, arthritis, and fibromyalgia.</p>
        </li>
        <li>
            <strong>Behavioral Change</strong>
            <p>Assists in breaking habits and addictions, such as smoking and overeating, by reprogramming the subconscious mind.</p>
        </li>
        <li>
            <strong>Improved Sleep</strong>
            <p>Can aid in treating sleep disorders, including insomnia, by promoting relaxation and altering sleep patterns.</p>
        </li>
        <li>
            <strong>Enhanced Mental Health</strong>
            <p>Helps address issues like depression, phobias, and trauma by accessing and reprocessing subconscious memories and emotions.</p>
        </li>
        <li>
            <strong>Boosted Confidence and Self-Esteem</strong>
            <p>Can improve self-confidence and self-esteem by reinforcing positive beliefs and behaviors.</p>
        </li>
        <li>
            <strong>Weight Loss and Healthy Habits</strong>
            <p>Supports weight loss and the adoption of healthy habits by changing subconscious attitudes towards food and exercise.</p>
        </li>
        <li>
            <strong>Performance Enhancement</strong>
            <p>Used by athletes and professionals to improve focus, motivation, and performance in various fields.</p>
        </li>
    </ul>
    <p class="para-text">These benefits make hypnotherapy a versatile and effective approach to promoting overall well-being and addressing a wide range of psychological and physical issues.</p>`,
    faqs: [
      {
        question: 'Is hypnotherapy safe?',
        answer: 'Yes, hypnotherapy is safe when performed by a trained and certified therapist. It is a natural, non-invasive treatment that helps individuals achieve relaxation and focus, with no harmful side effects.'
      },
      {
        question: 'Will I be unconscious during hypnotherapy?',
        answer: 'No, you will not be unconscious. In fact, you remain fully aware of your surroundings and in control throughout the session. Hypnotherapy is a state of focused relaxation, not sleep, allowing you to respond and engage when needed.'
      },
      {
        question: 'How many sessions will I need?',
        answer: 'The number of sessions required varies depending on the issue being addressed and the individual. Some people experience significant progress after just a few sessions, while others may need longer. Your therapist will tailor the treatment plan to your specific needs.'
      }
      // Add more FAQs here
    ]
  };
}
