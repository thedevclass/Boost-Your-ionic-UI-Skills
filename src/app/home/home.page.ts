import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  changed(e) {
    console.log(e.detail.checked);
    document.body.classList.toggle('dark', e.detail.checked);
  }

}
