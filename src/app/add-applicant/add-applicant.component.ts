import { Component, OnInit } from '@angular/core';
import {ApplicantService} from '../Shared/applicant.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-applicant',
  templateUrl: './add-applicant.component.html',
  styleUrls: ['./add-applicant.component.css']
})
export class AddApplicantComponent implements OnInit {

 constructor(private _applicantService:ApplicantService,private router:Router) { }

  ngOnInit() {
  }
 OnSubmit(formValues: any) {

    console.log(formValues);

    this._applicantService.AddApplicant(formValues).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error)
      });

       this.router.navigate(['Display']);
}
}