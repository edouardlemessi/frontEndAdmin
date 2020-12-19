import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CommandeServiceService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'http://localhost:3000/role';

  /**
   * Get list of Cofee
   */
  readAllProducts() {
    return this.http.get(this.apiUrl+"/all");
  }
 
}




  

  

  
