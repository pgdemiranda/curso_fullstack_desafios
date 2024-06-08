verificar = () => {
    const numero = parseInt(document.getElementById("numero").value);

    if (primo(numero)) {
        document.getElementById("result").innerText = numero + " é primo!";
    } else {
        document.getElementById("result").innerText = numero + " não é primo!";
    }
}

primo = (number) => {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}