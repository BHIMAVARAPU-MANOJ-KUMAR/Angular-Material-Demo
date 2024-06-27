import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-angularmaterial',
  templateUrl: './angularmaterial.component.html',
  styleUrls: ['./angularmaterial.component.css']
})
export class AngularmaterialComponent {
  opened = false;
  opened1 = false;
  opened2 = false; opened3 = false; opened4 = true; opened5 = true;
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  homeNotifications:number= 23;
  progressSpinner:number= 100;

  showSpinner= false;

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false
    }, 5000);
  }

  log(state:any) {
    console.log(state);
  }

  readonly panelOpenState = signal(false);
  readonly panelOpenState1 = signal(false);
}