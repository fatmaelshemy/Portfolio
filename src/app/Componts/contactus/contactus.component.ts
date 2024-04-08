import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  constructor() {}

  validateForm(): boolean {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLInputElement;

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let message = messageInput.value.trim();

    if (name == '' || email == '' || message == '') {
        alert('Please fill in all required fields.');
        return false;
    }

    this.showSuccessMessage();

    return false;
  }

  showSuccessMessage(): void {
    const lightbox = document.querySelector('.lightbox-container') as HTMLElement;
    lightbox.classList.replace('d-none', 'd-flex');

   
  }

  closePopUp(): void {
    const lightbox = document.querySelector('.lightbox-container') as HTMLElement;
    lightbox.classList.replace('d-flex', 'd-none');
  }
  openWhatsApp() {
    // Recipient's phone number
    var phoneNumber = '+201012923242'; // Replace this with the recipient's actual phone number
  
    // Message you want to send
    
  
    // Create the WhatsApp share link with both phone number and message
    var whatsappLink = 'https://wa.me/' + phoneNumber;
  
    // Open the WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');
  }
}
