import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {

   constructor(private http:HttpClient) { }

  private apiUrl = 'http://localhost:3000/prod';
 
  

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
    return this.http.get(this.apiUrl + '/show/' + id)
  }

  /**
   * Add new product
   * @param data
   */
  createNewProduct(data:any) {
    return this.http.post(this.apiUrl + "/new", data);
  }

  

  /**
   * Update existing product
   * @param id
   */
  updateProduct(id:any, data:any) {
    return this.http.patch(this.apiUrl + '/update/' + id, data);
  }

  /**
   * Delete a product
   * @param id
   */
  deleteProduct(id:any) {
    return this.http.delete(this.apiUrl + '/del/' + id)
  }
}
