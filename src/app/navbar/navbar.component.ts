import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  
  public showParent = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSideNav(){
    this.showParent = !this.showParent;
  }

}
