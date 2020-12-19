import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class MserviceService {

 
  constructor(private http:HttpClient) { }

  private apiUrl = 'http://localhost:3000/mat';
 
  

  /**
   * Get list of Cofee
   */
  readAllProducts() {
    return this.http.get(this.apiUrl+"/all");
  }

  /**
   * Get details about a cofee
   * @param id
   */
  readOneProduct(id:any) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  /**
   * Add new product
   * @param data
   */
  createNewProduct(data:any) {
    return this.http.post(this.apiUrl +'/new', data);
  }

  

  /**
   * Update existing product
   * @param id
   */
  updateProduct(id:any, data:any) {
    return this.http.patch(this.apiUrl + '/' + id, data);
  }

  /**
   * Delete a product
   * @param id
   */
  deleteProduct(id:any) {
    return this.http.delete(this.apiUrl + '/del/' + id)
  }

}

