import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirebaseService } from './services/firebase.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'merry-christmas';

  constructor(private firebase: FirebaseService) {
  }

  
  ngafterviewinit() {
    this.firebase.getWelcomeDescription();
  }
}
