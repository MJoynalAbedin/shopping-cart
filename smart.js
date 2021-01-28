function priceCalculator(isPlus, isCase, productNumber, productPrice) {

    // Number of Mobile/Case section
    var productNumberString = document.getElementById(productNumber); // "1"
    var productNumber = parseInt(productNumberString.value); //got number of mobile = 1
    var newNumber = productNumber;

    if (isPlus == false && productNumber > 0) {
        newNumber = productNumber - 1;
    }
    if (isPlus == true) {
        newNumber = productNumber + 1;
    }
    productNumberString.value = newNumber;

    //Total Mobile/Case Section

    var productPriceString = document.getElementById(productPrice); // 
    var newPrice = parseInt(productPriceString);
    if (isCase == true) {
        newPrice = 59 * newNumber
    }
    if (isCase == false) {
        newPrice = 1219 * newNumber
    }
    productPriceString.innerText = newPrice;

    //Subtotal part

    var currentIphone = parseInt(document.getElementById('priceOfMobile').innerText);
    var currentCase = parseInt(document.getElementById('priceOfCase').innerText);
    var total = currentIphone + currentCase;

    document.getElementById('subtotal').innerText = total;

    //Vat Part

    var totalVatPrice = total*5/100 + total;

    document.getElementById('total').innerText = totalVatPrice;
    


}