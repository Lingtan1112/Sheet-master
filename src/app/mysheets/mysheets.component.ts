import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SheetServiceService } from '../sheet-service.service';

@Component({
  selector: 'app-mysheets',
  templateUrl: './mysheets.component.html',
  styleUrls: ['./mysheets.component.scss']
})
export class MysheetsComponent implements OnInit {

  public sheetList : any[] = [];
  public subSheetList : any[] = [];

  constructor(private sheetService : SheetServiceService,public dialog: MatDialog ) { }

  getSheetById(id:number) {
    this.subSheetList = this.sheetService.getSubSheets(1);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.subSheetList;
    this.dialog.open(DialogElementsExampleDialog,dialogConfig);
  }

  ngOnInit(): void {
    this.sheetList = this.sheetService.getSheetList();
  }

}

@Component({
  selector: 'app-sub-sheets',
  templateUrl: '../sub-sheets/sub-sheets.component.html',
})
export class DialogElementsExampleDialog {
  
  constructor(private dialogRef: MatDialogRef<DialogElementsExampleDialog>, @Inject(MAT_DIALOG_DATA) subSheetParam:any){
    this.subSheetList = subSheetParam;
    console.log(this.subSheetList);
  }

  public subSheetList : any[] = [];
  
  ngOnInit(): void {
    
  }
}
