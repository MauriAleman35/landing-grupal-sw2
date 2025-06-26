import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({ providedIn: 'root' })
export class EmailService {
  sendEmail(data: any) {
    // Debes crear tu cuenta en https://www.emailjs.com/ y obtener tus IDs
    return emailjs.send(
      'service_f64tske', // tu service ID
      'template_ehgn0jp', // tu template ID
      data,
      'i8J907BT0_livcIWX'   // tu public key
    );
  }
}