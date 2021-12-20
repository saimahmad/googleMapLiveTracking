import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public origin: any;
  public destination: any;

  ngOnInit(): void {
    this.getDirections();
  }

  getDirections() {
    this.origin = { lat: 19.1254, lng: 72.9992 };
    this.destination = { lat: 19.1034, lng: 73.0113 };
    this.moveOrigin();
  }

  //changing origin location every second
  moveOrigin() {
    this.origin.lat -= 0.0001;
    this.origin.lng += 0.0001;
    setTimeout(() => {
      this.moveOrigin();
    }, 1000);
  }
}
