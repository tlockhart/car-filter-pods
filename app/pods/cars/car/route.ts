import Route from '@ember/routing/route';
import Car from 'car-filter/pods/car/model';

export default class CarsCar extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  model(params: any) {
    //All Data should be made available at the route
    // let cars: any = this.modelFor('cars');
    let cars: any = this.modelFor('cars');
    return cars.findBy('make', params.car_make);
  }
}
