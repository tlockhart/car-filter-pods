import Controller from '@ember/controller';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';

export default class CarsController extends Controller {
  @tracked carMakeMatches: any = [];
  @tracked carMakeNonMatches: any = this.cars;
  @tracked _selectedMake: string = '';
  @tracked isMakeFound: boolean = false;

  // return model
  get cars() {
    return this.model;
  }

  // gets the carMakeValue
  get selectedMake(): string {
    return this._selectedMake;
  }
  // sets the selectedMake
  @action selectMake(make: string, routeCarsToFilter: Function): void {
    // Step1: Set the selectedMake
    this._selectedMake = make;

    // Step2: Reset carMakeMatches on multiple button clicks
    this.carMakeMatches = [];

    // Step3: Filter the cars array by make
    routeCarsToFilter(this.selectedMake);
  }

  @action routeCarsToFilter(make: string): void{
    // Step 4: Check if input make matches Car make
    this.carMakeMatches = this.cars.filter((filteredCar: any) => {
      if (filteredCar.make.toLowerCase() === make.toLowerCase()) {
        return filteredCar;
      }
    });
    console.log("MAKE is", make);

    if (this.carMakeMatches.length > 0) {
      this.isMakeFound = true;
    } else {
      this.isMakeFound = false;
    }

    if (this.isMakeFound) {
      // Step 5:Call fiteredCarsByMake to set carMakeMatches
      this.filterCarsByMake(make, this.carMakeMatches);

    } else {
      this.setNonMatchingCarsToAll();
    }
  }

  setNonMatchingCarsToAll() {
    this.carMakeNonMatches = this.cars;
  }

  filterCarsByMake(make: string, carMakeMatches: any) {
    if (this.isMakeFound) {
      // Step6: Update carMakeMatches and carMakeNonMatches based on make
      this.carMakeMatches = carMakeMatches;

       this.carMakeNonMatches = this.cars.filter((car: any) => {
        if (car.make.toLowerCase() != make.toLowerCase()) {
          return car;
        }
      });
    }
    else {
      // Step7: Set Car Make Matches to empty if no match found
      this.carMakeMatches = [];
      // console.log('carMakeMatches BLANK', this.carMakeMatches);
    } //if
  }

  @action setDisplayMessage(car: any): void{
      var isSelectedMakeEmpty = this.selectedMake === '';
      if((this.selectedMake.toLowerCase() === car.make.toLowerCase())
      && !isSelectedMakeEmpty){
        this.isMakeFound = true;
        // console.log("IF isMakeFound", this.isMakeFound);
      } //if
      else
      {
        this.isMakeFound = false;
        // console.log("ELSE isMakeFound", this.isMakeFound);
      }
  } //shouldDisplayMessage
}
