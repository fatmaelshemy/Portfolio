import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  lastHighlightedButton: HTMLButtonElement | null = null;

  applyHighlight(event: MouseEvent): void {
    const targetButton = event.target as HTMLButtonElement;
    console.log('Clicked button:', targetButton);
    if (targetButton) {
      if (this.lastHighlightedButton) {
        this.lastHighlightedButton.classList.remove('highlighted');
      }
      targetButton.classList.add('highlighted');
      this.lastHighlightedButton = targetButton;
    }
  }
  
}
