import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from 'src/app/models/rental/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44307/api"
  constructor(private httpClient:HttpClient) { }


  getRental():Observable<RentalResponseModel>{
    let newPath=this.apiUrl+"/Rentals/getalldto"
    return this.httpClient.get<RentalResponseModel>(newPath);
  }

}
