import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,ReactiveFormsModule } from '@angular/forms';

import { ProduitServiceService } from '../produit-service.service';
import { ActivatedRoute} from  '@angular/router';

@Component({
  selector: 'app-produit-add',
  templateUrl: './produit-add.component.html',
  styleUrls: ['./produit-add.component.css']
})
export class ProduitAddComponent implements OnInit {
 
 productId:any;
 prod: any; 
 constructor(private formBuilder: FormBuilder, private userService: ProduitServiceService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('productId')

    });
  
    this.prod = this.formBuilder.group({
      designation: [''],
      date_achat: [''],
      date_peremption: [''],
      prix_achat:[''],
      prix_vente:[''],
      quantite:[''],
      cat:[''],
      imageUrl:[''],
      });
  }
   
 onSubmitForm() {
     this.userService.createNewProduct(this.prod.value).subscribe(
  (res) =>  console.log("hello")
);
 
  }   

}
