import { Component, OnInit } from '@angular/core';
import { CommandeServiceService } from '../commande-service.service'
import { ActivatedRoute} from  '@angular/router';

@Component({
  selector: 'app-all-comm',
  templateUrl: './all-comm.component.html',
  styleUrls: ['./all-comm.component.css']
})
export class AllCommComponent implements OnInit {

   commande:any
   id: any
  constructor(private userService:CommandeServiceService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
 
    this.userService.readAllProducts().subscribe(
      (res) => this.commande=res
    );
  }

}



