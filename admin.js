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
    let products = JSON.parse(localStorage.getItem("products")) || [];

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
    document.getElementById("productPrice").value =
        
list.innerHTML += `
<div style="background:#555;padding:12px;border-radius:10px;margin:10px 0;">
    <h3>${item.name}</h3>

    <p>Category: ${item.category}</p>

    <p>Price: ₹${item.price}</p>

    <button onclick="editProduct(${index})">✏️ Edit</button>

    <button onclick="deleteProduct(${index})">🗑️ Delete</button>

</div>
`;
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
function deleteProduct(index) {

    products.splice(index, 1);

    showProducts();

}

function editProduct(index) {

    let newPrice = prompt("Enter New Price", products[index].price);

    if (newPrice !== null && newPrice !== "") {

        products[index].price = newPrice;

        showProducts();

    }

}
