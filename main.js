

//consumiendo api con fetch 

const api ={
    key:'c38d0643ee6d2b0a4319c16cdda5ce88',
    url:'https://api.openweathermap.org/data/2.5/weather'
}


async function search(query){
    try{
        const response= await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`)
        const data= await response.json()
        console.log(data);
        console.log(typeof(data))
        cargadatos(data)
    }catch(err){
        console.log(err)
        alert('Hubo un error')
    }

}




function onSubmit(event){
    event.preventDefault()
    alert(searchbox.value)
    search(searchbox.value)


}

function cargadatos(data){
    city.innerHTML=data.name
}

const searchform =document.getElementById('search-form');
const searchbox=document.getElementById('searchbox');
const city =document.getElementById('city')
console.log(searchform)
console.log(city)
searchform.addEventListener('submit',onSubmit,true);





