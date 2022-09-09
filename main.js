var position = 3;
var back = document.getElementById('main-block');

function plus() {
    if (position > 4) {
        position = 0;
    }

    position = position + 1;
    var formula = 'url(car-' + position + '.jpg)';
    back.style.backgroundImage = formula;
}
function minus() {
    if (position < 2) {
        position = 6;
    }

    position = position - 1;
    var formula = 'url(car-' + position + '.jpg)';
    back.style.backgroundImage = formula;
}