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
        
        
        let name = document.querySelector('#nome')
        let imageUrl = document.querySelector('#foto')
        let price =document.querySelector('#prezzo')
        let description  =document.querySelector('#descrizione')
        let brand = document.querySelector("#brand")


         name.value = p.name
         imageUrl.value = p.imageUrl
         price.value = p.price
         description.value  = p.description
         brand.value =  p.brand


     })

     let salva = document.querySelector('.salva');

     salva.addEventListener('click',function(e){
  
         e.preventDefault();
  
         let name = document.querySelector('#nome').value;
         let imageUrl = document.querySelector('#foto').value;
         let price =document.querySelector('#prezzo').value;
         let description  =document.querySelector('#descrizione').value;
         let brand = document.querySelector("#brand").value;
         
         let newProdotto = {
             name,
             imageUrl,
             price,
             brand,
             description
             
          }
          
          
        
         fetch('https://striveschool-api.herokuapp.com/api/product/'+prodottoId, {
             method:'PUT',
             headers: {
                 'Content-Type':'application/json',
                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZmNhMTk1ZDRmNjAwMTg1NjI1NTMiLCJpYXQiOjE2OTk2MjU2ODksImV4cCI6MTcwMDgzNTI4OX0.mFEWZRn-TjjYR_tyWwp5ifZojs3nerucVnTQuQQ58ss"
             },
             body:JSON.stringify(newProdotto)
             })
             .then(res => res.json())
             .then(res => {
     
                 location.href = '/back-office.html'
     
              })
          })