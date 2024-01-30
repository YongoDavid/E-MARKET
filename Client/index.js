// this it to select the cart icon 
// let iconCart = document.querySelector('')

// get product list form json file 


// let listProducts = [];

// const addDataToHTML = () => {
//     listProductHTML.innerHTML='';
//     if(listProducts.length > 0){
//         listProducts.forEach(products => {
//             let newProduct = document.createElement('div')
//             newProduct.classList.add('Detials')
//             newProduct.innerHTML = `
//             <div class="Detials">
//                     <div class="Item">
//                         <img src="./images/game.png" alt="">
//                         <span class="item-text">
//                             <h4>HAVIT HV-G92 Gamepad</h4>
//                         </span>
//                     </div>
    
//                     <div class="Item-price">
//                         <p>$120</p>
//                         <span class="disprice"><p>$160</p></span>
//                         <button type="submit"><a href="" class="addCart"><i class="material-icons">shopping_cart</i></a></button>
//                     </div>
//                     <div class="Five-star1">
//                         <img src="./images/Five star.png" alt="">
//                         <p>(88)</p>
//                     </div>

//                 </div>`
//         })
//     }
// }


let listProductHTML = document.querySelector('.Detials')
listProductHTML.addEventListener('click' , (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('material-icons') || positionClick.classList.contains('')){
        console.log('item clicked')
        alert('1')
    }
})



// const initApp = () => {
//     get data from json 
//     fetch('products.json')
//     .then(response => response.json())
//     .then(data => {
//         listProducts = data ;
//         addDataToHTML()
//     })
// }
// initApp();