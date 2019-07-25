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
  
  
    deliveries(){
      
    return store.deliveries.filter(delivery => delivery.customerId === this.id);
  }
  
  
  meals(){
    
    return this.deliveries().map(delivery => delivery.meal());
  }
}


class Meal {
  
  constructor(title, price){
    
    this.title = title;
    this.price = price;
    this.id = ++mealId;
    store.meals.push(this);
  }






}




class Delivery {
  
  constructor(mealId, neighborhoodId, customerId){
    
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    this.id = ++deliveryId;
    store.deliveries.push(this);
  }
  
   meal(){
     
    return store.meals.filter(meal => meal.id === this.mealId);
  }
  
}

