import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddApplicantComponent } from '../add-applicant/add-applicant.component';
import { DisplayApplicantsComponent } from '../display-applicants/display-applicants.component';
import { EditApplicantComponent } from '../edit-applicant/edit-applicant.component';


const routes: Routes = [

  {
    path:"Add", component:AddApplicantComponent
  },
  {
    path:"Display", component:DisplayApplicantsComponent
  },
   {
    path:"Edit/:id", component:EditApplicantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }