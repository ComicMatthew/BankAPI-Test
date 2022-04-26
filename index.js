
function insertText() {
    console.log('Test')
    

}


function showAllCurrency(){

    let xhr = new XMLHttpRequest()
    let table = "a"
    
    let date = document.getElementById("date").value
    let url = `http://api.nbp.pl/api/exchangerates/tables/${table}/${date}/`


    xhr.open('GET', url, true)

    xhr.onload = function() {
        
        
        
        if (xhr.status == 200){
            console.log("success")
            let currency = JSON.parse(this.response)
            let ratess = currency[0].rates
            console.log(currency)
                    
            console.log(ratess)
                    
             currency.forEach(element => {
                 const dateCard = document.createElement('div')
                 dateCard.setAttribute('id', 'date')
                 dateCard.innerHTML = element.effectiveDate
                 document.getElementById('feed').appendChild(dateCard)
             })
                   
            ratess.forEach(element => {
                const currencyCard = document.createElement('div')
                currencyCard.innerHTML = element.currency
                document.getElementById('currency').appendChild(currencyCard)

                const codeCard = document.createElement('div')
                codeCard.innerHTML = element.code
                document.getElementById('code').appendChild(codeCard)

                const midCard = document.createElement('div')
                midCard.innerHTML = element.mid
                document.getElementById('mid').appendChild(midCard)
            })
        } else if (xhr.status == 404){
            alert("Brak danych z tego dnia")
                
        }
    
    }

    xhr.send()
}


function showSpecificCurrency() {

        let xhr = new XMLHttpRequest()
        let table = "a"
        let code = document.getElementById("currInput").value 
        let date = document.getElementById("date").value
        let url = `http://api.nbp.pl/api/exchangerates/rates/${table}/${code}/${date}/`


        xhr.open('GET', url, true)

        xhr.onload = function() {
            if (xhr.status == 200){
                console.log("success Waluta")
                let currency = JSON.parse(this.response)
                console.log(currency)
                let ratess = currency.rates
                console.log(ratess[0])
            
                const currencyCard = document.createElement('div')
                currencyCard.innerHTML = currency.currency
                document.getElementById('currency').appendChild(currencyCard)

                const codeCard = document.createElement('div')
                codeCard.innerHTML = currency.code
                document.getElementById('code').appendChild(codeCard)

                const midCard = document.createElement('div')
                midCard.innerHTML = ratess[0].mid
                document.getElementById('mid').appendChild(midCard)
            } else if (xhr.status == 404){
                alert("Brak danych z tego dnia")
            }
        } 
        xhr.send()
}

