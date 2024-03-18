{
    const formSubmit = (event) => {
        const formElement = document.querySelector(".js-form");
        const inputAmountElement = document.querySelector(".js-amount");
        const resultElement = document.querySelector(".js-result");
        const eurElement = document.querySelector(".js-eur");
        const chfElement = document.querySelector(".js-chf");
        const usdElement = document.querySelector(".js-usd");

        const convertToEUR = (amount) => {
            return (amount * 0.231).toFixed(2) + "EUR";
        };

        const convertToCHF = (amount) => {
            return (amount * 0.221).toFixed(2) + "CHF";
        };

        const convertToUSD = (amount) => {
            return (amount * 0.251).toFixed(2) + "USD";
        };

        event.preventDefault();
        if (!inputAmountElement.value) return;

        let result = "";

        if (eurElement.checked) {
            result = convertToEUR(inputAmountElement.value);
        }
        if (chfElement.checked) {
            result = convertToCHF(inputAmountElement.value);
        }
        if (usdElement.checked) {
            result = convertToUSD(inputAmountElement.value);
        }

        resultElement.innerText = result;
    };

    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", formSubmit);
}