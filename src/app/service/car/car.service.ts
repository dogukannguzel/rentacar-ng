import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from 'src/app/models/car/carResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44307/api"

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
    let newPath=this.apiUrl+"/cars/getall"
    return this.httpClient.get<CarResponseModel>(newPath);
   }

}
