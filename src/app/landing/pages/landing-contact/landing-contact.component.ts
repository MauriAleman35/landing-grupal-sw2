import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common'; // <-- IMPORTANTE
import { EmailService } from '../../services/email.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-landing-contact',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,MatProgressSpinner
  ],
  templateUrl: './landing-contact.component.html',
  styleUrl: './landing-contact.component.css'
})
export class LandingContactComponent {
  isSubmitting = false;
  enviado = false;
  error = '';
  contactForm;

  facultades = [
    { value: 'fich', label: 'Facultad de Ingeniería en Ciencias de la Computación y Telecomunicaciones' },
    { value: 'fcet', label: 'Facultad de Ciencias Exactas y Tecnología' },
    { value: 'fcj', label: 'Facultad de Ciencias Jurídicas' },
    { value: 'fcs', label: 'Facultad de Ciencias de la Salud' },
    { value: 'fhce', label: 'Facultad de Humanidades y Ciencias de la Educación' },
    { value: 'other', label: 'Otra dependencia' }
  ];

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      faculty: ['', Validators.required],
      phone: [''],
      message: ['', Validators.required]
    });
  }

submitForm() {
  this.error = '';
  this.enviado = false;
  if (this.contactForm.invalid) {
    this.contactForm.markAllAsTouched();
    return;
  }
  this.isSubmitting = true;
  console.log('Enviando a EmailJS:', this.contactForm.value); // <-- agrega esto
  this.emailService.sendEmail(this.contactForm.value)
    .then(() => {
      this.enviado = true;
      this.contactForm.reset();
    })
    .catch((err) => {
      this.error = 'No se pudo enviar el mensaje. Inténtalo de nuevo.';
      console.error('EmailJS error:', err); // <-- y esto
    })
    .finally(() => this.isSubmitting = false);
}
}