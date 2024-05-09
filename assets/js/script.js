const getPersonajes =async()=>{
    try{
        const response =await fetch("https://rickandmortyapi.com/api/character");
        const data =await response.json();
        return data.results;
    } catch(error){
        console.log('error en el proceso',error);
    }
}


const createCards = (results=[] )=>{
    const personajesRow = document.getElementById("personajesRow");

    results.map((result)=>{
        const {id ,name, species,status,location, image:imagen} = result;
        const {name: locationName} = location;

        const divCol = document.createElement("div");
        divCol.classList.add("col-xl-3");
        divCol.classList.add( "col-lg-3");
        divCol.classList.add("col-md-3");
        divCol.classList.add("col-12");
        divCol.classList.add("mt-2");
        divCol.classList.add("mb-2");
        
        const card = document.createElement("div");
        card.classList.add("card")

        const img = document.createElement("img");
        img.src = imagen;
        img.alt = `imagen de los personajes ${name}`;
        img.classList.add("card-body");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body")

        const title = document.createElement("h5");
        title.classList.add("text-title");
        title.textContent = `Nombre: ${name}`;

        const subtitle = document.createElement("p");
        subtitle.classList.add("text-title");
        subtitle.textContent = `Especie: ${species}`;

        const subtitle2 = document.createElement("p");
        subtitle2.classList.add("text-title");
        subtitle2.textContent = `Estado: ${status}`;

        const btnVer = document.createElement("button");
        btnVer.classList.add("btn");
        btnVer.classList.add("btn-warning");
        btnVer.textContent = "Ver más";
        btnVer.addEventListener("click",()=> {
           console.log("la id es :",id);
           console.log("el nombre es :",name);
           console.log("la imagen del personaje es; ",imagen);
           console.log("la ubicacion es :",location)
            
           
        });

        divBody.appendChild(title);
        divBody.appendChild(subtitle);
        divBody.appendChild(subtitle2);

        card.appendChild(img);
        card.appendChild(divBody);

        divCol.appendChild(card);

        divCol
        
        
        card.appendChild(btnVer);
        personajesRow.appendChild(divCol);
    });
}

getPersonajes()
    .then((data)=>{
        console.log(data);
        createCards(data);
    })
    .catch((error)=>{
        console.log(`fallo la wea: ${error}`);
    })

