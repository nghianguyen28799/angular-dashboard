import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  sidebarOpen = true;

  constructor() { }

  ngOnInit() {
  }

  sidebarToggle($event: any) {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
