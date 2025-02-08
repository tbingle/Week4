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

