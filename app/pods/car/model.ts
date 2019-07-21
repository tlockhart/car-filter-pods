import DS from 'ember-data';
const { attr } = DS;

export default class Car extends DS.Model.extend({

}) {
  // normal class body definition here
  @attr() make;
  @attr() model;
  @attr() year;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'car': Car;
  }
}
