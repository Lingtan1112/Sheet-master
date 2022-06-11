import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISubSheetInterface } from './SubSheetList';

@Injectable({
  providedIn: 'root'
})
export class SheetServiceService {

  public sheetList : any[] = [];

  public subSheetList : any[] = [];

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    
  }

  getSheetList(){
    this.sheetList =  [
    {"id":1,"title":'Demo-1',"description":'Demo Sheet 1'},
    {"id":2,"title":'Demo-2',"description":'Demo Sheet 2'},
    {"id":3,"title":'Demo-3',"description":'Demo Sheet 3'},
    {"id":4,"title":'Demo-4',"description":'Demo Sheet 4'},
    {"id":5,"title":'Demo-5',"description":'Demo Sheet 5'},
    {"id":6,"title":'Demo-5',"description":'Demo Sheet 6'},
    {"id":7,"title":'Demo-5',"description":'Demo Sheet 8'},
    {"id":8,"title":'Demo-5',"description":'Demo Sheet 9'}
  ];
    return this.sheetList;
  }

  
  //getSubSheets(id:number) : Observable<ISubSheetInterface[]>{
  //  return (this.http.get<ISubSheetInterface[]>('https://reqbin.com/echo/get/json'));

    // this.subSheetList = [
    //   {'index':1, 'sheetName':'Salary Sheet'},
    //   {'index':2, 'sheetName':'Attendance Sheet'},
    //   {'index':3, 'sheetName':'Marks Sheet'},
    // ];
    // return this.subSheetList;
  //}

getSubSheets(id:number){
  return this.http.get('http://localhost:4300/');
}

}
