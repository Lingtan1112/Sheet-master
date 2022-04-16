import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SheetServiceService {

  public sheetList : any[] = [];

  public subSheetList : any[] = [];

  constructor() { }

  getSheetList(){
    this.sheetList =  [
    {"id":1,"title":'Demo-1',"description":'Demo Sheet 1'},
    {"id":2,"title":'Demo-2',"description":'Demo Sheet 2'},
    {"id":3,"title":'Demo-3',"description":'Demo Sheet 3'},
    {"id":4,"title":'Demo-4',"description":'Demo Sheet 4'},
    {"id":5,"title":'Demo-5',"description":'Demo Sheet 5'}
  ];
    return this.sheetList;
  }

  
  getSubSheets(id:number){
    this.subSheetList = [
      {'index':1, 'sheetName':'Salary Sheet'},
      {'index':2, 'sheetName':'Attendance Sheet'},
      {'index':3, 'sheetName':'Marks Sheet'},
    ];

    return this.subSheetList;
  }

}
