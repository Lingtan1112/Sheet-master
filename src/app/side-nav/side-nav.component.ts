import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  closeNav(){
    //let el: HTMLElement = this.myDiv.nativeElement;
    //el.click();
  }

  showFiller = false;
  
  @Input() public showChild : any = false;

  constructor() { }

  ngOnInit(): void {
  }

}
