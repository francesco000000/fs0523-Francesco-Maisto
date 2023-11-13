let url = new URLSearchParams(location.search);
let prodottoId = url.get('id')
console.log(prodottoId);

fetch('https://striveschool-api.herokuapp.com/api/product/'+ prodottoId, {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZmNhMTk1ZDRmNjAwMTg1NjI1NTMiLCJpYXQiOjE2OTk2MjU2ODksImV4cCI6MTcwMDgzNTI4OX0.mFEWZRn-TjjYR_tyWwp5ifZojs3nerucVnTQuQQ58ss"
    },
    })
    .then(res => res.json())
    .then(p => {
        
        
        let nome = document.querySelector('.nome')
        let marca = document.querySelector("#brand")
       
        let prezzo =document.querySelector('.prezzo')
        let descrizione  =document.querySelector('.descrizione')


         nome.innerHTML = p.name
         marca,innerHeight =  p.brand
        
         prezzo.innerHTML = p.price
         descrizione.innerHTML  = p.description


     })