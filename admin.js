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
    let products = [];

function addProduct() {
    const name = document.getElementById("productName").value;
    const category = document.getElementById("productCategory").value;
    const price = document.getElementById("productPrice").value;

    if (!name || !category || !price) {
        alert("Please fill all fields.");
        return;
    }

    products.push({
        name,
        category,
        price
    });

    showProducts();

    document.getElementById("productName").value = "";
    document.getElementById("productCategory").value = "";
    document.getElementById("productPrice").value = "";
}

function showProducts() {

    const list = document.getElementById("productList");

    if(products.length===0){
        list.innerHTML="No Products Added";
        return;
    }

    list.innerHTML="";

    products.forEach((item,index)=>{

        list.innerHTML += `
        <div style="background:#555;padding:10px;border-radius:8px;margin:10px 0;">
            <b>${item.name}</b><br>
            ${item.category}<br>
            ₹${item.price}
        </div>
        `;

    });

        }

    alert("Product Added Successfully!\n\n" +
          "Name: " + name +
          "\nCategory: " + category +
          "\nPrice: ₹" + price);

    document.getElementById("productName").value = "";
    document.getElementById("productCategory").value = "";
    document.getElementById("productPrice").value = "";
          }
