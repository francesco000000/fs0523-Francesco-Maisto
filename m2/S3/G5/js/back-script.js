
              
                fetch('https://striveschool-api.herokuapp.com/api/product/', {
                    headers: {
                        
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZmNhMTk1ZDRmNjAwMTg1NjI1NTMiLCJpYXQiOjE2OTk2MjU2ODksImV4cCI6MTcwMDgzNTI4OX0.mFEWZRn-TjjYR_tyWwp5ifZojs3nerucVnTQuQQ58ss"
                    }})
                    .then(res => res.json())
                    .then(prodotti => {
                        
                         
                        prodotti.forEach((p,i) => {
            
        
                let tr = document.createElement('tr');
                
                let clone = getClone();

                
                let id = clone.querySelector('.id');
                let nome = clone.querySelector('.nome');
                let img = clone.querySelector('.img');
                let prezzo = clone.querySelector('.prezzo');
                let brand = clone.querySelector('.brand');
                let descrizione = clone.querySelector('.descrizione');
                let modifica = clone.querySelector('.modifica');
                let elimina = clone.querySelector('.elimina');

                id.innerText = (i + 1);
                nome.innerText = p.name;
                img.innerText = p.imageUrl;
                prezzo.innerText = p.price;
                brand.innerText = p.brand;
                descrizione.innerText = p.description;
                modifica.href = 'modifica.html?id='+p._id
              
                  
            
              
                elimina.addEventListener('click',function(){
                    
                    fetch('https://striveschool-api.herokuapp.com/api/product/'+p._id , {
                        method:'DELETE',
                        headers: {
                            
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZmNhMTk1ZDRmNjAwMTg1NjI1NTMiLCJpYXQiOjE2OTk2MjU2ODksImV4cCI6MTcwMDgzNTI4OX0.mFEWZRn-TjjYR_tyWwp5ifZojs3nerucVnTQuQQ58ss"
                        },
                       
                        }).then(res => {
                        if(res.status === 200){
                            tr.remove();
                           
                           
                            
                        }
                    })
                })

                tr.append(clone)
                document.querySelector('#lista').append(tr);

            })
            
            
        })

        function getClone(){
            
            let temp = document.getElementsByTagName("template")[0];
            return temp.content.cloneNode(true);
        }
        