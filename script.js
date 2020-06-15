function valid() {

  let name = document.querySelector('#name').attributes["required"] = "";

  let car = document.querySelector('#car-year').attributes["required"] = "";

  let date = document.querySelector('#start-date').attributes["required"];

  let days = document.querySelector('#days').attributes["required"];

  let creditcard = document.querySelector('#credit-card').attributes["required"];

  let cvv = document.querySelector('#cvv').attributes["required"];

  let expiration = document.querySelector('#expiration').attributes["required"];

  let form = document.querySelector('#parking-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
  })

}
function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}
valid();