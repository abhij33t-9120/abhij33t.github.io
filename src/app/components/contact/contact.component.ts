import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  sendEmail(e : Event){
    e.preventDefault();
    emailjs.sendForm('service_15hhrjo', 'template_t4hpz6p', e.target as HTMLFormElement, 'HuE6Qkyyy_vZAwJy2')
    .then((result : EmailJSResponseStatus) => {
      console.log(result.text)
    },
    (error) => {
      console.log(error.text);
    }
    )
  }
}
