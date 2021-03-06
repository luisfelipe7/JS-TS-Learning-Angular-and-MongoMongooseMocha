import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = products;

  constructor(private router:Router, private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    // Route Parameters

    /* Without QueryParams
    this.route.paramMap.subscribe(x=>{
      console.log(x);
    })

    let id=this.route.snapshot.paramMap.get('id');
    */

    // Query Params
    this.route.queryParamMap.subscribe(x=>{
      console.log(x);
    });

    let page= this.route.snapshot.queryParamMap.get('page');
    console.log(page);

  }

  showProducts(){
    // Old Version
    // this.router.navigate(['/products'],{relativeTo:this.route});

    // New Version
    this.router.navigate(['/products'],{queryParams:{page:1}});
  }

}
