import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApplicantService} from '../Shared/applicant.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-edit-applicant',
  templateUrl: './edit-applicant.component.html',
  styleUrls: ['./edit-applicant.component.css']
  })
export class EditApplicantComponent implements OnInit {
id:any;
applicantInfo:any;
  constructor(private _route:ActivatedRoute,private _applicantService:ApplicantService,private router:Router) { }

  ngOnInit() {
  this.id = this._route.snapshot.params['id'];

   this._applicantService.GetApplicantById(this.id).subscribe(
      data=>{
        this.applicantInfo=data;
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    );
  }

   OnSubmit(formValues: any) {

    console.log(formValues);

    this._applicantService.UpdateApplicant(formValues).subscribe(
      (data) => {
        console.log(data);
        
      },
      (error) => {
        console.log(error)
      });
     this.router.navigate(['Display']);
}
}