import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands!: any[];

  constructor(private brandService: BrandService, 
    private router: Router) { }

  ngOnInit(): void {

    let param = new HttpParams()
    param = param.append("_limit",5);
    this.getBrands(param);

  }

  private getBrands(param : HttpParams){
    this.brandService.getBrandList(param).subscribe(res =>{
      console.log(res);
      this.brands = res.list;
    }, err=>{
      console.log(err);
    });
  }

  getBrandsByLimit(limitCombobox: any){
    //console.log(limitCombobox.target.value);
    let limit = limitCombobox.target.value;
    let param = new HttpParams()
    param = param.append("_limit",limit);
    this.getBrands(param);
  }

  goToBrandForm(){
    this.router.navigate(["brand/form"]);
  }

  edit(brandId: number){
    console.log(brandId);
    this.router.navigate(["brand/form", brandId]);
  }

}
