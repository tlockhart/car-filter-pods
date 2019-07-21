import Component from '@ember/component';

export default class CarItem extends Component.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  get shouldDisplay() {
    // return this.args.isMakeFound;
    return this.isMakeFound;
  }
};

