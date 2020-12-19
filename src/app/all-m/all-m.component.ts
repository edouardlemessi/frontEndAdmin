import { Component, OnInit } from '@angular/core';
import { MserviceService } from '../mservice.service'
import { ActivatedRoute} from  '@angular/router';

@Component({
  selector: 'app-all-m',
  templateUrl: './all-m.component.html',
  styleUrls: ['./all-m.component.css']
})
export class AllMComponent implements OnInit {

   mat:any
   id: any
  constructor(private userService:MserviceService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
 
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')

    });
    if(this.id != null){
      this.userService.deleteProduct(this.id).subscribe(
        (res) => this.mat=res
      );
    }
    this.userService.readAllProducts().subscribe(
      (res) => this.mat=res
    );
  }
}
