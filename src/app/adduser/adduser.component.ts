import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,ReactiveFormsModule } from '@angular/forms';

import { UserServiceService } from '../user-service.service'
import { ActivatedRoute} from  '@angular/router';
import { User} from  '../user.model';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
user1:any;
userId:any;
user: any; 


  constructor(private formBuilder: FormBuilder, private userService: UserServiceService,private route : ActivatedRoute) { 
   
  }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId')

    });
  console.log(this.userId);
  
  
    this.user = this.formBuilder.group({
      nom: [' '],
      prenom: [' '],
      cin: [' '],
      email:[' '],
      password:[' '],
      mobile:[' '],
      city:[' '],
      role:[' '],
  
  
      });
      if(this.userId != null){
      this.userService.readOneProduct(this.userId).subscribe(
        (res) => this.user.value = res
      );
      console.log(this.user.value);
      }
 
  }
     

  onSubmitForm() {
    if(this.userId==null)
    {
 this.userService.createNewProduct(this.user.value).subscribe(
  (res) =>  console.log("hello")
);
 }else{
  this.userService.updateProduct(this.userId,this.user.value).subscribe(
    (res) =>  console.log("hello")
  );
 }
  }

}
