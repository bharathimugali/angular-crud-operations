import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddApplicantComponent } from './add-applicant/add-applicant.component';
import { ApplicantService } from './Shared/applicant.service';
import { DisplayApplicantsComponent } from './display-applicants/display-applicants.component';
import { EditApplicantComponent } from './edit-applicant/edit-applicant.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,  HttpClientModule,AppRoutingModule],
  declarations: [ AppComponent, AddApplicantComponent, DisplayApplicantsComponent, EditApplicantComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ApplicantService]
})
export class AppModule { }
