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

//Task 5 
//Declare inventory
let inventory = [45,234,576,0,4567];
console.log(inventory);//Inital inventory
let filteredInventory= inventory.filter(quantity => quantity>0);//Remove products with 0 quantity
console.log(filteredInventory);//Log filtered

//Task 6
//Sales revenue
let sales = [435,3456,1234,4356];
let totalRevenue= sales.reduce((total,currentSales)=>total+ currentSales,0);
console.log (totalRevenue);

//Task 7 
//Customer array
let customers = ["Bob","Bink","One","Toad"];
let customerFind = customers.find(Customer=> Customer === "Bink");//Find Bink
console.log(customerFind);//Log into console

//Task 8
//Tax calculation
let amount = 345
let taxRate = .065
function calculateTax(amount, taxRate){
    let tax = amount * taxRate;
    console.log(`Tax to be collected: $${tax}`);
    return tax;
};
calculateTax(amount,taxRate);//Log tax in console

//Task 9
//Discounts
function applyDiscount(Price,discount){
    let discountedPrice = Price - (Price* discount);
    console.log(`Discounted Price: $${discountedPrice}`);
    return discount;
}
applyDiscount(2345,.2);

//Task 10
//Points
let calcualtePoints = purchaseAmount =>{
    let Points = Math.floor(purchaseAmount/10);
    console.log(`Points earned: ${Points}`);
    return Points;
};
calcualtePoints(456)//$456 spent 
