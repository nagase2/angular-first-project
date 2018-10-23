import { Component } from '@angular/core';
import { ChangedArgsValues, FavoriteComponent } from './comp/favorite/favorite.component';
import { MatDialog } from '@angular/material';
import { Router, NavigationEnd, GuardsCheckEnd, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inverness';

  constructor(router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        console.log(event)
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }
  // navStart: Observable<NavigationStart>;

  // constructor(private router: Router) {
  //   // Create a new Observable the publishes only the NavigationStart event
  //   this.navStart = router.events.pipe(
  //     filter(evt => evt instanceof NavigationStart)
  //   ) as Observable<NavigationStart>;
  // }
};
