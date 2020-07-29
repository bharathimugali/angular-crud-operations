import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class ApplicantService {
 private apiUrl:string="https://localhost:44389/api/applicants/";
  constructor(private _http:HttpClient) { }

  GetApplicants(): any {
  return  this._http.get(this.apiUrl);
  }

   AddApplicant(applicant:any):any {
   return this._http.post(this.apiUrl, applicant);
}

UpdateApplicant(applicant:any):any {
  //$`{url}/{id}`
   return this._http.put(this.apiUrl, applicant);
}

GetApplicantById(id:any): any {
  return  this._http.get(this.apiUrl+id);
  }

  DeleteApplicant(id:any): any {
  return  this._http.delete(this.apiUrl+id);
  }
}

