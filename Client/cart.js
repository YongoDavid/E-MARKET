document.addEventListener('DOMContentLoaded' , function () {
    let addToCartButtons = document.querySelectorAll('.addCart');

    addToCartButtons.forEach(function(button){
        button.addEventListener('click', function (event){
            event.preventDefault();


            // Get product detials 
            let productContainer = button.closest('.Detials');
            let productName = productContainer.querySelector('h4').textContent;
            let productPrice = productContainer.querySelector('Item-price p').textContent;

            // Call function to add proooducts to cart 
            addToCart(productName , productPrice);
        });
    });

    function addToCart (name ,price){
        // Create new tables rows for the cart 

        let newRow = document.createElement('tr');
        newRow.innerHTML = `
        <td>
            <div class="cart-info">
                <img src="./images/cartSmall.png" alt="">
                <div>
                    <p>${name}</p>
                    <small>Price: ${price}</small> 
                    <br>
                    <a href="#">Remove</a>
                </div>
            </div>
        </td>
        <td><input type="number" value="1"></td>
        <td>${price}</td>
        `;
        // append the new row to the cart table 
        let cartTable = document.getElementById('cartTABLE')
        cartTable.appendChild(newRow);
    }
});
addToCart();