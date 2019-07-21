import Route from '@ember/routing/route';

export default class Cars extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  model(){
    // return all results
    return this.store.findAll('car');
  }
}
