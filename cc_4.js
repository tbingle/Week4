//Creating Customer Information
let customer = {
    Name: "Bork",
    Age : 7,
    Email: "borkborknomnom@email.com"
};
//Logging in console
console.log (`Name: ${customer.Name}`);
console.log (`Age: ${customer.Age}`);
console.log (`Email:${customer.Email}`);

//Task 2 
//Creating order identification
let order = {
    orderID: 3456,
    totalAmount: 234,
    status: "Processing",
    displayOrder: function () {
        console.log(`Order ID: ${this.orderID}`)
        console.log(`Total Amount : $${this.totalAmount}`)
        console.log(`Status: ${this.status}`)
    }
};
order.displayOrder(); //Show order details in console

let cartItems = ["Bread", "Steak","Milk"];
cartItems.push ("chicken")
cartItems.pop();
cartItems.unshift("Apples");
cartItems.shift()
console.log(cartItems);

//Task 4 
//Declare prices
let prices = [123,55,3332];
console.log(prices);//Inital price log
let discountedPrices = prices.map(prices=> prices *.9); //Discount rate
console.log(discountedPrices);//After discount log

