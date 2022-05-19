// Call Apply Bind
// if you want to access a method of one object onto another, You can use these methods.

const kitchen = {
    name: "kitchen",
    purpose: "cook",
    cookFood() {
      console.log(`Serving ${this.order} in 2 mins`);
    },
  };
  
  const bedroom = {
    name: "bedroom",
    purpose: "sleep",
    order: "magiee",
  };
  
  kitchen.cookFood.call(bedroom);
  let Bind = kitchen.cookFood.bind(bedroom)
  Bind()

