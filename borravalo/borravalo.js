////////////////////////////////
// borravaló / gratuity function
////////////////////////////////

var price = prompt('Mennyit kell fizetned?');

function gratuity(price) {
    var toPay = (price / 100) * 15;  
    return toPay;
}
var totalCost = parseInt(price) + gratuity(price);

alert('A borravaló: ' + gratuity(price) + ' Forint\n' + 'Tehát a végösszeg: ' + totalCost);
