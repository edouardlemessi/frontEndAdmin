import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,ReactiveFormsModule } from '@angular/forms';

import { MserviceService } from '../mservice.service'
import { ActivatedRoute} from  '@angular/router';

@Component({
  selector: 'app-add-m',
  templateUrl: './add-m.component.html',
  styleUrls: ['./add-m.component.css']
})
export class AddMComponent implements OnInit {
 Mat:any;
matId:any;
Mat1: any; 


  constructor(private formBuilder: FormBuilder, private userService: MserviceService,private route : ActivatedRoute) { 
   
  }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.matId = params.get('matId')

    });
  console.log(this.matId);
  
  if(this.matId==null)
  {
    this.Mat = this.formBuilder.group({
      desi: [''],
      disponibilite: [''],
      date_achat: [''],
      etat:[''],
      cat:[''],
      urlImage:[''],
      });
  }else{
    this.userService.readOneProduct(this.matId).subscribe(
      (res) => console.log(res)
     ); 
     
  }
     
       
      
     
  }

  onSubmitForm() {
    if(this.matId==null)
    {
 this.userService.createNewProduct(this.Mat.value).subscribe(
  (res) =>  console.log("hello")
);
 }else{
  this.userService.updateProduct(this.matId,this.Mat.value).subscribe(
    (res) =>  console.log("hello")
  );
 }
  }


}


