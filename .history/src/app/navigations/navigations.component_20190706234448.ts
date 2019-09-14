import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { transition, trigger, state, animate, style } from '@angular/animations';
import { Routes } from '@angular/router';
import { routes } from '../app-routing.module';
import { link } from 'fs';

export interface Link { path: string, data: { name: string, icon: string, type: string } }
export interface Menu { public: [Link], user: Link[], admin: Link[] }

@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss'],
  animations: [

      trigger('fadeOut', [
         state('true', style({ opacity: 0.5 })),
         state('false', style({ opacity: 1 })),
         transition('true <=> false', animate(5000))  ])  //end trigger

   ]
})
export class NavigationsComponent implements OnInit{   

   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
         map(result => result.matches)
      );
   opened: boolean = true;
   sideNavIcon: boolean = false;
   links: Routes = routes;

  constructor(
     private breakpointObserver: BreakpointObserver
     ) { }

   ngOnInit()
   {
      var menu: Menu;
      let links: Link[];
      links = <Link[]>routes;
      console.log(links);
      let pages = links.reduce((acc, value) => {            
            if(value.data.type) console.log(value);
            // else if(value.data.type === 'user') acc.user.push(value);
            // else if(value.data.type === 'admin') acc.admin.push(value);
         return acc;
      }, menu);
      console.log(pages);
   }

  closeSidenav()
  {
      this.sideNavIcon? this.sideNavIcon = false: this.sideNavIcon = true;
  }

}
