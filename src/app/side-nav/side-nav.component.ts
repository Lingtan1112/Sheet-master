import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  showFiller = false;
  
  @Input() public showChild : any = false;

  constructor() { }

  ngOnInit(): void {
  }

}
