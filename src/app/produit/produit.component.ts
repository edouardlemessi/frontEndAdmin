import { Component, OnInit } from '@angular/core';
import { ProduitServiceService } from '../produit-service.service'
import { ActivatedRoute} from  '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

 product:any
   id: any
  constructor(private userService:ProduitServiceService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
 
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')

    });
    if(this.id != null){
      this.userService.deleteProduct(this.id).subscribe(
        (res) => this.product=res
      );
    }
    this.userService.readAllProducts().subscribe(
      (res) => this.product=res
    );
  }
}
