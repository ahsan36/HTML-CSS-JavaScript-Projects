// if the document is still loading add event listener to our button 'DOMContentLoaded'
// 'DOMContentLoaded' :- this event as fire as soon as the page is loading

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')

    // Add event listener for remove button

    for (var i = 0; i < removeCartItemButtons.length; i++) {

        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
        
    }

    // Change the input of quantity

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')

    for (var i = 0; i < quantityInputs.length; i++) {

        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)

    }

    // Add event listener for add to cart button

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    
    for (var i = 0; i < addToCartButtons.length; i++) {

        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)

    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

// function for purchase clicked

function purchaseClicked() {

    alert('Thank you for your purchase')

    var cartItems = document.getElementsByClassName('cart-items')[0]

    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    
    updateCartTotal()
}

//function for remove the cart items from our cart

function removeCartItem(event) {
    var buttonClicked = event.target

    // parent element of remove button for completely remove the button

    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target

    // Check the input of quantity in not null and not less than 0

    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

//function for add to cart items when we click

function addToCartClicked(event) {

    var button = event.target
    var shopItem = button.parentElement.parentElement

    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src

    addItemToCart(title, price, imageSrc)

    updateCartTotal()
}

// Function for add items to cart and changed the inner html

function addItemToCart(title, price, imageSrc) {
    
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')

    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')

    for (var i = 0; i < cartItemNames.length; i++) {

        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }

    }

    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn-new btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents

    cartItems.append(cartRow)

    //clicked remove button for remove the cart items from our cart

    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)

    //changed quantity from the cart items from our cart

    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

// Update total of our cart every time when we remove the item

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]

    var cartRows = cartItemContainer.getElementsByClassName('cart-row')

    var total = 0

    for (var i = 0; i < cartRows.length; i++) {

        var cartRow = cartRows[i]

        // Update the price
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]

        // Update the price
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]

        // Replace $ with original price
        var price = parseFloat(priceElement.innerText.replace('$', ''))

        // quantity of product
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }

    // two value after decimal
    total = Math.round(total * 100) / 100

    // Update the total price    
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}