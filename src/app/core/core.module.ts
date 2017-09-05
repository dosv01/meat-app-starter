import { RestaurantsService } from 'app/core/restaurants.service';
import { OrderService } from 'app/core/order.service';
import { ShoppingCartService } from 'app/core/shopping-cart.service';
import { NgModule } from '@angular/core';

@NgModule({
    providers: [ShoppingCartService, OrderService, RestaurantsService]
})

export class CoreModule{}