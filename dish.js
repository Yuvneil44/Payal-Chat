
let qto1 = 0, priceo1 = 0;
let qto2 = 0, priceo2 = 0;
let qto3 = 0, priceo3 = 0;
let qto4 = 0, priceo4 = 0;
let qto5 = 0, priceo5 = 0;
let qto6 = 0, priceo6 = 0;
let qto7 = 0, priceo7 = 0;
let qto8 = 0, priceo8 = 0;
let qto9 = 0, priceo9 = 0;
let totalPrice = 0;

function saveData() {
    const cartData = {
        products: [
            { id: 1, quantity: qto1, price: priceo1 },
            { id: 2, quantity: qto2, price: priceo2 },
            { id: 3, quantity: qto3, price: priceo3 },
            { id: 4, quantity: qto4, price: priceo4 },
            { id: 5, quantity: qto5, price: priceo5 },
            { id: 6, quantity: qto6, price: priceo6 },
            { id: 7, quantity: qto7, price: priceo7 },
            { id: 8, quantity: qto8, price: priceo8 },
            { id: 9, quantity: qto9, price: priceo9 }
        ],
        totalG: totalPrice
    };

    localStorage.setItem('restaurantData', JSON.stringify(cartData));
}

function qt1(choice) {
    let q1t = document.getElementById("QT1");
    let pr1ce = document.getElementById("price1");
    if (choice == -1 && qto1 > 0) {
        qto1--; priceo1 -= 60; totalPrice -= 60;
    } else if (choice == 1) {
        qto1++; priceo1 += 60; totalPrice += 60;
    }
    q1t.innerText = qto1; pr1ce.innerText = priceo1; total.innerText = totalPrice;
    saveData();
}

function qt2(choice) {
    let q12 = document.getElementById("QT2");
    let pr2ce = document.getElementById("price2");
    if (choice == -1 && qto2 > 0) {
        qto2--; priceo2 -= 60; totalPrice -= 60;
    } else if (choice == 1) {
        qto2++; priceo2 += 60; totalPrice += 60;
    }
    q12.innerText = qto2; pr2ce.innerText = priceo2; total.innerText = totalPrice;
    saveData();
}

function qt3(choice) {
    let q13 = document.getElementById("QT3");
    let pr3ce = document.getElementById("price3");
    if (choice == -1 && qto3 > 0) {
        qto3--; priceo3 -= 20; totalPrice -= 20;
    } else if (choice == 1) {
        qto3++; priceo3 += 20; totalPrice += 20;
    }
    q13.innerText = qto3; pr3ce.innerText = priceo3; total.innerText = totalPrice;
    saveData();
}

function qt4(choice) {
    let q14 = document.getElementById("QT4");
    let pr4ce = document.getElementById("price4");
    if (choice == -1 && qto4 > 0) {
        qto4--; priceo4 -= 40; totalPrice -= 40;
    } else if (choice == 1) {
        qto4++; priceo4 += 40; totalPrice += 40;
    }
    q14.innerText = qto4; pr4ce.innerText = priceo4; total.innerText = totalPrice;
    saveData();
}

function qt5(choice) {
    let q15 = document.getElementById("QT5");
    let pr5ce = document.getElementById("price5");
    if (choice == -1 && qto5 > 0) {
        qto5--; priceo5 -= 30; totalPrice -= 30;
    } else if (choice == 1) {
        qto5++; priceo5 += 30; totalPrice += 30;
    }
    q15.innerText = qto5; pr5ce.innerText = priceo5; total.innerText = totalPrice;
    saveData();
}

function qt6(choice) {
    let q16 = document.getElementById("QT6");
    let pr6ce = document.getElementById("price6");
    if (choice == -1 && qto6 > 0) {
        qto6 -= 4; priceo6 -= 5; totalPrice -= 5;
    } else if (choice == 1) {
        qto6 += 4; priceo6 += 5; totalPrice += 5;
    }
    q16.innerText = qto6; pr6ce.innerText = priceo6; total.innerText = totalPrice;
    saveData();
}

function qt7(choice) {
    let q17 = document.getElementById("QT7");
    let pr7ce = document.getElementById("price7");
    if (choice == -1 && qto7 > 0) {
        qto7--; priceo7 -= 40; totalPrice -= 40;
    } else if (choice == 1) {
        qto7++; priceo7 += 40; totalPrice += 40;
    }
    q17.innerText = qto7; pr7ce.innerText = priceo7; total.innerText = totalPrice;
    saveData();
}

function qt8(choice) {
    let q18 = document.getElementById("QT8");
    let pr8ce = document.getElementById("price8");
    if (choice == -1 && qto8 > 0) {
        qto8--; priceo8 -= 20; totalPrice -= 20;
    } else if (choice == 1) {
        qto8++; priceo8 += 20; totalPrice += 20;
    }
    q18.innerText = qto8; pr8ce.innerText = priceo8; total.innerText = totalPrice;
    saveData();
}

function qt9(choice) {
    let q19 = document.getElementById("QT9");
    let pr9ce = document.getElementById("price9");
    if (choice == -1 && qto9 > 0) {
        qto9--; priceo9 -= 40; totalPrice -= 40;
    } else if (choice == 1) {
        qto9++; priceo9 += 40; totalPrice += 40;
    }
    q19.innerText = qto9; pr9ce.innerText = priceo9; total.innerText = totalPrice;
    saveData();
}

let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");
let item6 = document.getElementById("item6");
let item7 = document.getElementById("item7");
let item8 = document.getElementById("item8");
let item9 = document.getElementById("item9");

item1.style.display = "none";
item2.style.display = "none";
item3.style.display = "none";
item4.style.display = "none";
item5.style.display = "none";
item6.style.display = "none";
item7.style.display = "none";
item8.style.display = "none";
item9.style.display = "none";

function openOverlay() {
    document.getElementById("confirmOverlay").style.display = "block";
    const tableBody = document.getElementById("orderItemsList");

    tableBody.innerHTML = "";

    const currentItems = [
        { name: "Chhole Bhature", qty: qto1, price: priceo1 },
        { name: "Masala Dosa", qty: qto2, price: priceo2 },
        { name: "Samosa Plain", qty: qto3, price: priceo3 },
        { name: "Chana Samosa", qty: qto4, price: priceo4 },
        { name: "Tikki Chaat", qty: qto5, price: priceo5 },
        { name: "Golgappe", qty: qto6, price: priceo6 },
        { name: "Pepsi", qty: qto7, price: priceo7 },
        { name: "Water Bottle", qty: qto8, price: priceo8 },
        { name: "Limca", qty: qto9, price: priceo9 }
    ];

    currentItems.forEach(item => {
        if (item.qty > 0) {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.qty}</td>
                <td>${item.price}₹</td>
            `;
            tableBody.appendChild(row);
        }
    });
    let totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td colspan="2" style="color:red;"><strong>Grand Total</strong></td><td style="color:red; font-weight="bold"><strong>${totalPrice}₹</strong></td>`;
    tableBody.appendChild(totalRow);
}

function closeOverlay() {
    document.getElementById("confirmOverlay").style.display = "none";
}

function placeOrder() {
    if(totalPrice!=0){
        alert("Your Order Has Been Placed!");
        closeOverlay();
    }else{
        alert("Empty Cart, Order Not Placed!");
        closeOverlay();
    }
}



