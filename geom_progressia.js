//сюда вводить значения для теста

var b = 2, //первый член прогрессии
    q = 5, //коэффициент прогрессии
    n = 6; //n-й член прогрессии

//функция суммы n первых членов прогрессии

function geom_progressia (b, q, n){
    if ( !( isNaN(b) || isNaN(q) || isNaN(n) ) ) {
        var a = Math.pow(q,n);
        if (q !=  1) {
            return sum = (b*a - b) / (q - 1);
        }
        else {
            return ("коэффициент прогрессии q не может быть равен 1 !")
        }
    }
    else {
        return ("переменные b , q и n должны быть числами!")
    }
}

//функция нахождения значения члена прогрессии по его порядковому номеру

function nNumber (b, q, n) {
    if ( !( isNaN(b) || isNaN(q) || isNaN(n) ) ) {
        var bn = b * Math.pow(q, n - 1);
        return bn;
    }
    else {
        return ("переменные b , q и n должны быть числами!")
    }
}

alert('sum = '+geom_progressia( b, q, n) + ' . Bn = ' + nNumber (b, q, n))

