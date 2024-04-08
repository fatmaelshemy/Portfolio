import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor() { }

  downloadCV(): void {
    // Define the URL of the PDF file
    const pdfUrl = 'assets/cv/Fatma Ahmed Full Stack.pdf'; // Adjust the URL to the location of your PDF file
  
    // Create an anchor element
    const a = document.createElement('a');
  
    // Set the href attribute to the URL of the PDF file
    a.href = pdfUrl;
  
    // Set the download attribute to specify the filename for the download
    a.download = 'Fatma Ahmed Full Stack.pdf'; 
  
    // Append the anchor element to the document body
    document.body.appendChild(a);
  
    // Simulate a click on the anchor element to trigger the download
    a.click();
  
    // Cleanup: remove the anchor element
    document.body.removeChild(a);
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
