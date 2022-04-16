import { Component, OnInit } from '@angular/core';
import { SheetServiceService } from '../sheet-service.service';

@Component({
  selector: 'app-sub-sheets',
  templateUrl: './sub-sheets.component.html',
  styleUrls: ['./sub-sheets.component.scss']
})
export class SubSheetsComponent implements OnInit {

  constructor() {}

  public subSheetList : any[] = []; 

  ngOnInit(): void {
  }

}
