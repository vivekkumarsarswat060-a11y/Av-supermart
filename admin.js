function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Wrong Username or Password!");

    }

}
function addProduct() {
    const name = document.getElementById("productName").value;
    const category = document.getElementById("productCategory").value;
    const price = document.getElementById("productPrice").value;

    if (!name || !category || !price) {
        alert("Please fill all fields.");
        return;
    }

    alert("Product Added Successfully!\n\n" +
          "Name: " + name +
          "\nCategory: " + category +
          "\nPrice: ₹" + price);

    document.getElementById("productName").value = "";
    document.getElementById("productCategory").value = "";
    document.getElementById("productPrice").value = "";
          }
