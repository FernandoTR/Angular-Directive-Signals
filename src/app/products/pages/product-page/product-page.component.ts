import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  // Esta es otra opción para hacer la inyecciones de dependencias en lugar de hacerlas en el constructor, ej: constructor( private fb: FormBuilder){}
  private fb = inject( FormBuilder );

  public color: string = 'green';

  public myForm : FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(6), Validators.email ]]
  })

  changeColor(): void {
    this.color= '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}
