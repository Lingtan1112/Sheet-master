import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SheetServiceService } from '../sheet-service.service';

@Component({
  selector: 'app-mysheets',
  templateUrl: './mysheets.component.html',
  styleUrls: ['./mysheets.component.scss']
})
export class MysheetsComponent implements OnInit {

  public description = 'This sheet is for Demo purpose';
  public sheetTitle = 'Demo Sheet';
  public sheetList : any[] = [];
  constructor(private sheetService : SheetServiceService,public dialog: MatDialog ) { }
  
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  ngOnInit(): void {
    this.sheetList = this.sheetService.getSheetList();
  }

}

@Component({
  selector: 'app-sub-sheets',
  templateUrl: '../sub-sheets/sub-sheets.component.html',
})
export class DialogElementsExampleDialog {}
