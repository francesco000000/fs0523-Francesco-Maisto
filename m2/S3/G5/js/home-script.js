


fetch('https://striveschool-api.herokuapp.com/api/product/',{
headers:{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZmNhMTk1ZDRmNjAwMTg1NjI1NTMiLCJpYXQiOjE2OTk2MjQ0NTcsImV4cCI6MTcwMDgzNDA1N30.GU7i2POJ73GlyDkYug6BWOnnYnVdcdHqgRoU6c2uxNQ",

    'Content-Type':'application/json'
}
})
.then(res => res.json())
.then(prodotti => {

    let target = document.querySelector('#target');
    prodotti.forEach(p => {
        
        
       
        let clone = getCardClone();
        
       
        let img = clone.querySelector('.card-img-top');
        let title = clone.querySelector('.card-title');
        let brand = clone.querySelector('.card-brand');
        let description = clone.querySelector('.card-descript');
        let price = clone.querySelector('.card-price');
        let addToCart = clone.querySelector('.addToCart');
        let dettagli = clone.querySelector('.dettagli')

       
        img.src = p.imageUrl;
        title.innerText = p.name;
        price.innerText = p.price+'£';
        brand.innerText = p.brand;
        description.innerText = p.description;
        dettagli.href = 'dettagli.html?id='+p._id
       

        addToCart.addEventListener('click',()=>{

           
        })

       
        target.append(clone);
        
    })

})

function getCardClone(){
let temp = document.getElementsByTagName("template")[0];
return temp.content.cloneNode(true);
}





