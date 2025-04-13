import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'projct';

  page = 'home';

  changePage(selectedPage: string) {
    this.page = selectedPage;
}
}
