import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-mat';
  constructor( private router: Router) { }
  onpok() {
    this.router.navigate(['/pokemon']);
    console.log('click');
  }
}
