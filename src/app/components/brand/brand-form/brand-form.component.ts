import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.css']
})
export class BrandFormComponent implements OnInit {

  brandForm!: FormGroup;
  isSubmitted = false;
  brandId!: number;

  constructor(private fb: FormBuilder, 
    private brandService: BrandService,
    private toastrService: ToastrService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.brandForm = this.fb.group({
      id: [''],
      name: ['']
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) =>{
      this.brandId = parseInt(paramMap.get('id')!);
      this.brandService.getById(this.brandId).subscribe(brand =>{
        this.brandForm.patchValue(brand);
      });
    });
  }

  saveBrand(){
    if(this.brandId){
      this.updateBrand();
    }else{
      this.createBrand();
    }
  }

  createBrand(){
    //console.log(this.brandForm.value);
    this.brandService.saveBrand(this.brandForm.value).subscribe(res =>{
      console.log("Brand Response");
      console.log(res);
      this.isSubmitted = true;
      this.toastrService.success('Brand created successfully', '');
    }, err =>{
      console.log("Error Block");
      console.error(err);
    });
  }

  updateBrand(){
    this.brandService.updateBrand(this.brandForm.value).subscribe(res =>{
      
      this.isSubmitted = true;
      this.toastrService.success('Brand updated successfully', '');
    }, err =>{
      console.log("Error Block");
      console.error(err);
    })
  }

}
