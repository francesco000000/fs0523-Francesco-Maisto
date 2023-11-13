
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
        
        
      
       fetch('https://striveschool-api.herokuapp.com/api/product/', {
           method:'POST',
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