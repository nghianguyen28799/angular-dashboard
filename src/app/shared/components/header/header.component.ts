import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log("1" + this.toggleSidebarForMe.emit)
  }

  toggleSidebar () {
    this.toggleSidebarForMe.emit();
  }
}
