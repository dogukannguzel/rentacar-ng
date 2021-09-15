import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from 'src/app/models/brand/brandResponseModel';




@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44307/api"

  constructor(private httpClient:HttpClient) { }


  getBrands():Observable<BrandResponseModel>{
   let newUrl=this.apiUrl+"/Brands/getall"

   return this.httpClient.get<BrandResponseModel>(newUrl);

  }

}
