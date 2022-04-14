import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mysheets',
  templateUrl: './mysheets.component.html',
  styleUrls: ['./mysheets.component.scss']
})
export class MysheetsComponent implements OnInit {

  public description = 'This sheet is for Demo purpose';
  public sheetTitle = 'Demo Sheet';
  public sheetList = [{title:'Demo-1',description:'Demo Sheet 1'},
                      {title:'Demo-2',description:'Demo Sheet 2'},
                      {title:'Demo-2',description:'Demo Sheet 2'},
                      {title:'Demo-2',description:'Demo Sheet 2'},
                      {title:'Demo-2',description:'Demo Sheet 2'},
                      {title:'Demo-2',description:'Demo Sheet 2'},
                      {title:'Demo-2',description:'Demo Sheet 2'},
                      {title:'Demo-2',description:'Demo Sheet 2'}];
  constructor() { }

  ngOnInit(): void {
  }

}
