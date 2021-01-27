document.getElementById('plusBtn').addEventListener('click', function(){
    var mobileNumberString = document.getElementById("iphoneInput").value;
    var mobileNumber = parseFloat(mobileNumberString); //got number of mobile
    var newNumber = mobileNumber + 1;
    document.getElementById("iphoneInput").value = newNumber;
   
    var mobilePriceString = document.getElementById("priceOfMobile").innerText;
    var mobilePrice = parseFloat(mobilePriceString); //got mobile price
    var newPrice = 1219 + mobilePrice;
    document.getElementById("priceOfMobile").innerText = newPrice;

    var subtotalString = document.getElementById('subtotal').innerText;
    var subtotalNumber = parseFloat(subtotalString); //got subtotal number
    var subtotalNew = subtotalNumber + 1219;
    document.getElementById("subtotal").innerText = subtotalNew;

    var totalString = document.getElementById('total').innerText;
    var totalNumber = parseFloat(totalString); // 1341.9
    var totalNew = totalNumber + 1279.95;
    document.getElementById('total').innerText = totalNew;
});

// Calculation of minus

document.getElementById('btnMinus').addEventListener('click', function(){
    var mobileNumberString = document.getElementById("iphoneInput").value;
    var mobileNumber = parseFloat(mobileNumberString); //got number of mobile
    var newNumber = mobileNumber - 1;
    document.getElementById("iphoneInput").value = newNumber;
   
    var mobilePriceString = document.getElementById("priceOfMobile").innerText;
    var mobilePrice = parseFloat(mobilePriceString); //got mobile price
    var newPrice = mobilePrice - 1219;
    document.getElementById("priceOfMobile").innerText = newPrice;

    var subtotalString = document.getElementById('subtotal').innerText;
    var subtotalNumber = parseFloat(subtotalString); //got subtotal number
    var subtotalNew = subtotalNumber - 1219;
    document.getElementById("subtotal").innerText = subtotalNew;

    var totalString = document.getElementById('total').innerText;
    var totalNumber = parseFloat(totalString); // 1341.9
    var totalNew = totalNumber - 1279.95;
    document.getElementById('total').innerText = totalNew;
});

// Iphone case

document.getElementById('plusBtnCase').addEventListener('click', function(){
    var caseNumberString = document.getElementById("caseInput").value;
    var caseNumber = parseFloat(caseNumberString); //got number of case
    var newNumber = caseNumber + 1;
    document.getElementById("caseInput").value = newNumber;
   
    var casePriceString = document.getElementById("priceOfCase").innerText;
    var casePrice = parseFloat(casePriceString); //got case price
    var newPrice = 59 + casePrice;
    document.getElementById("priceOfCase").innerText = newPrice;

    var subtotalNumber = parseFloat(document.getElementById("subtotal").innerText); //got subtotal number
    var subtotalNew = subtotalNumber + 59;
    document.getElementById("subtotal").innerText = subtotalNew;

    var totalString = document.getElementById('total').innerText;
    var totalNumber = parseFloat(totalString); // 1341.9
    var totalNew = totalNumber + 61.95;
    document.getElementById('total').innerText = totalNew;
});

// Calculation of minus

document.getElementById('btnMinusCase').addEventListener('click', function(){
    var caseNumberString = document.getElementById("caseInput").value;
    var caseNumber = parseFloat(caseNumberString); //got number of case
    var newNumber = caseNumber - 1;
    document.getElementById("caseInput").value = newNumber;
   
    var casePriceString = document.getElementById("priceOfCase").innerText;
    var casePrice = parseFloat(casePriceString); //got case price
    var newPrice = casePrice - 59;
    document.getElementById("priceOfCase").innerText = newPrice;

    var subtotalNumber = parseFloat(document.getElementById("subtotal").innerText); //got subtotal number
    var subtotalNew = subtotalNumber - 59;
    document.getElementById("subtotal").innerText = subtotalNew;

    var totalString = document.getElementById('total').innerText;
    var totalNumber = parseFloat(totalString); // 1341.9
    var totalNew = totalNumber - 61.95;
    document.getElementById('total').innerText = totalNew;
});

document.getElementById('cross').addEventListener('click', function(){
    document.getElementById("vanish").style.display = 'none';
})
document.getElementById('cross2').addEventListener('click', function(){
    document.getElementById("vanish2").style.display = 'none';
})
