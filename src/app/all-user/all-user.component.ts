import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service'
import { ActivatedRoute} from  '@angular/router';
@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
   users:any
   id: any
  constructor(private userService:UserServiceService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
 
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')

    });
    if(this.id != null){
      this.userService.deleteProduct(this.id).subscribe(
        (res) => this.users=res
      );
    }
    this.userService.readAllProducts().subscribe(
      (res) => this.users=res
    );
  }


}
