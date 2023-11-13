fetch('https://api.pexels.com/v1/search?query=nature&per',{
    method:'GET',
    headers:{            
         "Authorization": "BO8pTlX62tk8h1iLZirAwJRP1LlQmdJZpchyGx6W3eHiycX8gUxmLahB"
                },
     })
     .then(res => res.json())
     .then(foto => {
         
         foto.photos.forEach(element => {
            let div = document.querySelectorAll(".card")
            div.forEach(element => {
                
                let img = document.createElement("img")
            
            });
            console.log(div);
                //  img.src= element.photos.src.original
         });
                 
             });
    
            
         
         
    