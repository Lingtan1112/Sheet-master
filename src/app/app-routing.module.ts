 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSheetComponent } from './create-sheet/create-sheet.component';
import { MysheetsComponent } from './mysheets/mysheets.component';

const routes: Routes = [
  {path:'create',component:CreateSheetComponent},
  {path:'list', component:MysheetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
