const button = document.getElementById("convert-Button")
const select = document.getElementById("select-currency")



const convertValues = async () => {
    const inputReais = document.getElementById("input-convert").value
    const realValueText = document.getElementById("realValueText")
    const dolarValueText = document.getElementById("dolarValueText")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high



    console.log(data)

    //realValueText.innerHTML = inputReais
    //dolarValueText.innerHTML = inputReais / dolar

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === 'US$ Dólar americano') {
        dolarValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }
    if (select.value === '€ Euro') {
        dolarValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    }
}

chanceCurrency = () => {
    const sectionName = document.getElementById('section-name')
    const currencyImg = document.getElementById('currency-img')


    if (select.value === 'US$ Dólar americano') {
        sectionName.innerHTML = 'US$ Dólar americano'
        currencyImg.src = './assets/estados-unidos (1) 1.svg'
    }

    if (select.value === '€ Euro') {
        sectionName.innerHTML = 'Euro'
        currencyImg.src = './assets/Design sem nome 1.svg'
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', chanceCurrency)
console.log(button)