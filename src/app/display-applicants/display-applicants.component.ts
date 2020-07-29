import { Component, OnInit } from '@angular/core';
import {ApplicantService} from '../Shared/applicant.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-display-applicants',
  templateUrl: './display-applicants.component.html',
  styleUrls: ['./display-applicants.component.css']
})
export class DisplayApplicantsComponent implements OnInit {

  applicantList:any;
  constructor(private _applicantService:ApplicantService,private router:Router) { }

  ngOnInit() {

    this._applicantService.GetApplicants().subscribe(
      data=>{
        this.applicantList=data;
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  OnEdit(ApplicantId:any)
  {
      this.router.navigate(['Edit', ApplicantId ]);
  }

  OnDelete(ApplicantId:any)
  {
    this._applicantService.DeleteApplicant(ApplicantId).subscribe(
      data=>{
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    );
   this.ngOnInit();
  }

}