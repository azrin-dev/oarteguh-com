import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

   items = [
      { img: 'assets/images/products/123.jpg', alt: '123' },
      { img: 'assets/images/products/124.jpg', alt: '124' },
      { img: 'assets/images/products/125.jpg', alt: '125' },
      { img: 'assets/images/products/126.jpg', alt: '126' },
      { img: 'assets/images/products/127.jpg', alt: '127' },
      { img: 'assets/images/products/128.jpg', alt: '128' },
      { img: 'assets/images/products/129.jpg', alt: '129' },
      { img: 'assets/images/products/130.jpg', alt: '130' }
   ];

  constructor() { }

  ngOnInit() {
  }

}
