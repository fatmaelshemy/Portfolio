import { Component } from '@angular/core';
import { Skills } from '../Models/skills';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  skills:Skills[];
  constructor(){
    this.skills=[
      {"title":"html5","image":"assets/images/html.png"},
      {"title":"Css3","image":"assets/images/css.png"},
      {"title":"JS","image":"assets/images/js.jpg"},
      {"title":"Bootstrap","image":"assets/images/Bootstrap.png"},
      {"title":"OOP","image":"assets/images/oop.png"},
      {"title":"Data Structure","image":"assets/images/data.png"},
      {"title":"Git & GitHub","image":"assets/images/git.png"},
      {"title":"Angular","image":"assets/images/Angular.png"},
      {"title":".Net","image":"assets/images/.net.png"},
    ]
  }
}

