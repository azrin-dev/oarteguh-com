import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss']
})
export class NavigationsComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    opened: boolean = false;
    sideNavIcon: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  closeSidenav()
  {
     console.log('Clicked');
      this.sideNavIcon? this.sideNavIcon = false: this.sideNavIcon = true;
  }

}
