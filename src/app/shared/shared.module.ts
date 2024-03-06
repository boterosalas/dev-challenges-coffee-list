import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeCardComponent } from './components/coffee-card/coffee-card.component';



@NgModule({
  declarations: [
    CoffeeCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoffeeCardComponent
  ]
})
export class SharedModule { }
