import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SheetServiceService {

  public sheetList : any[] = [];

  constructor() { }

  getSheetList(){
    this.sheetList =  [
    {"title":'Demo-1',"description":'Demo Sheet 1'},
    {"title":'Demo-2',"description":'Demo Sheet 2'},
    {"title":'Demo-3',"description":'Demo Sheet 3'},
    {"title":'Demo-4',"description":'Demo Sheet 4'},
    {"title":'Demo-5',"description":'Demo Sheet 5'}
  ];

    return this.sheetList;
  }
}
