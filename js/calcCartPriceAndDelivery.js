function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper')
    const priceEl = cartWrapper.querySelectorAll('.price__currency')
    const totalPriceEl = document.querySelector('.total-price')
    const deliveryCost = document.querySelector('.delivery-cost')
    const cartDelivery = document.querySelector('[data-cart-delivery]')

    let priceTotal = 0

    priceEl.forEach(function (item) {
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]')
        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText)
    });
    
    totalPriceEl.innerText = priceTotal

    if(priceTotal > 0) {
        cartDelivery.classList.remove('none')
    }else {
        cartDelivery.classList.add('none')

    }

    if(priceTotal >= 500) {
        deliveryCost.classList.add('free')
        deliveryCost.innerText = 'бесплатно'
    }else {
        deliveryCost.classList.remove('free')
        deliveryCost.innerText = '250 ₽'
    }
}