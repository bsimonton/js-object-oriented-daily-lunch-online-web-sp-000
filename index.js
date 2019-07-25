// global datastore



let store = {deliveries : [], meals: [], customers: [], neighborhoods: []};

let neighborhoodId = 0;
let customerId = 0;
let mealId = 0;
let deliveryId = 0;



class Neighborhood {
  constructor(name){
    
    this.name = name;
    this.id = ++neighborhoodId;
    store.neighborhoods.push(this);
    
  }

 deliveries() {
   
    return store.deliveries.filter(delivery => delivery.neighborhoodId === this.id);
  }

 customers(){
   
    return store.customers.filter(customer => customer.neighborhoodId === this.id);
  }
}


class Customer {
  constructor(name, neighborhoodId){
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    this.id = ++customerId;
    store.customers.push(this);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}