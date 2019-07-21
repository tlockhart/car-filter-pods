export default function () {

  //backend requests will be passed to /api
  // this.namespace = '/api';

  let cars = [
    {
      "type": "cars",
      "id": "1",
      "attributes":
      {
        "make": "Honda",
        "model": "Accord",
        "year": "2007"
      }
    },
    {
      "type": "cars",
      "id": "2",
      "attributes":
      {
        "make": "Toyota",
        "model": "Camery",
        "year": "2013"
      }
    },
    {
      "type": "cars",
      "id": "3",
      "attributes":
      {
        "make": "Ford",
        "model": "Explorer",
        "year": "2002"
      }
    }
  ];

  // this.get('/cars', function(db, request) {
  this.get('/cars', function () {
    return { data: cars };
  });

  // this.get('/cars/car/:make', function(db, request) {
  this.get('/cars/car/:make', function () {
    /* The data has been made available in the parent route,
       so it is not necessary to send it again here*/
    // return {data: cars}
  }); //get
}
