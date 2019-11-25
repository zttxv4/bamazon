var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // console.log("connected as id" + connection.threadId),
    console.log("");
    console.log("Welcome to Bamazon!");
    console.log("")
        // run the start function after the connection is made to prompt the user
        displayProducts();
        
});

var displayProducts = function () {
    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("ID:" + res[i].item_id + "|" + "Product:" + res[i].product_name + "|" + "Price:" + res[i].price + "|");
        }
        console.log("-------------------------------------------------------------------");
        userPrompt();
    })
    
    
}

var userPrompt = function(){
    inquirer
    .prompt({
        name: "id",
        type: "input",
        message: "Enter the ID number of the product you would like to purchase.",
        filter: Number
    },
    {
        name: "quantity",
        type: "input",
        message: "How many items would you like to purchase?",
        filter: Number
    }).then(function(answers){
        var amountOrdered = answers.quantity;
        var productOrder = answers.id;
        customerOrder(amountOrdered, productOrder);
    });
};

var customerOrder = function(id, amount){
    connection.query("SELECT * FROM products WHERE item_id = " + id, function(err, res){
        if (err) throw err;
        if (amount <= res[0].stock_quantity){
            var cost = res[0].price * amount;
            console.log("Your order is in stock!");
            console.log("Your Total is: " + cost);

            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + amount + "WHERE item_id = " + id);
 
        }else{
            console.log("Sorry! Your order is not in stock at the moment.")
        }
        displayProducts();
    })

}

