import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription, delay } from 'rxjs';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class CoffeeListComponent implements OnInit, OnDestroy {

  private getCoffeeList$: Subscription = new Subscription();
  isLoading: boolean = false;
  coffeeList: any[] = [];
  coffeeListFiltered: any[] = [];
  filters = [
    { label: 'All Products', value: 'all' },
    { label: 'Available Now', value: 'available' },
  ]
  activeFilter = 'all';

  constructor(
    private coffeeService: CoffeeService
  ) { }

  ngOnInit(): void {
    this.getCoffeeList();
  }

  getCoffeeList() {
    this.isLoading = true;
    this.getCoffeeList$ = this.coffeeService.getCoffeeList().pipe(delay(2000)).subscribe((data: any) => {
      this.coffeeList = data || [];
      this.coffeeListFiltered = data || [];
      this.isLoading = false;
    })
  }

  changeFilter(value: string) {
    this.activeFilter = value;
    switch (value) {
      case 'all':
        this.coffeeListFiltered = [...this.coffeeList];
        break;
      case 'available':
        this.coffeeListFiltered = [...this.coffeeList].filter(coffee => coffee.available);
        break;
    }
  }

  ngOnDestroy(): void {
    this.getCoffeeList$.unsubscribe();
  }

}
