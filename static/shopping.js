//Task 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.
let userLoggedIn;
userLoggedIn = true

if (userLoggedIn){
    console.log("you are able to add items to the cart")
}else {
    console.log("sorry you have not logged in yet please try logging in first before adding to cart")
}


//Task 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart.
let products = ["pen", "notebook", "pencil"]
for (let product of products) {
    console.log(`we are currently selling ${product}`);
}

let cart = []
cart.push("pencil")
console.log(`you have added ${cart} to your cart`)

//Task 3: Calculate the total cost of the items in the cart and display it to the user.
let itemPrices = [10, 14, 12, 22];
let total = 0;
for (i in itemPrices){
    total += itemPrices[i]
}
console.log(`your total cost for today is ${total} dollars`);