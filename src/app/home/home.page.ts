import { Component, ViewChild } from '@angular/core';
import { IonContent } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonContent) content: IonContent;
  class = '';

  ScrollStart() {
    // console.log('Scroll Started');
  }

  ScrollEnd() {
    // console.log('Scroll Ended');
  }

  Scroll(e) {
    // console.log(e.detail);
    if (e.detail.scrollTop > 100) {
      this.class = 'shrink';
    } else {
      this.class = '';
    }
  }

  top() {
    this.content.scrollToTop(4000);
  }

  down() {
    this.content.scrollToBottom(1000);
  }

}
