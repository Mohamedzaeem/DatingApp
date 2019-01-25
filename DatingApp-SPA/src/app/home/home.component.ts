import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  regtoggle = false;
  constructor() { }

  ngOnInit() {
  }

  registertoggle() {
    this.regtoggle = true;
  }

  cancelForRegister(regtoggle: boolean) {
    this.regtoggle = regtoggle;
  }

}
