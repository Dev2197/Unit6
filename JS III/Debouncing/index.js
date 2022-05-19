let timerId;
function debounce(func,delay)
{
    if(timerId)
    {
        clearTimeout(timerId)
    }
    timerId = setTimeout(()=>{
        func()
    },delay)
}

async function main()
{
    let data = await searchMovie()

    if(data === undefined)
    {
        return false;
    }

    displayData(data);
    console.log(data);
}

async function searchMovie()
{
    try{
        let movie = document.getElementById("search").value;
    let res = await fetch(`http://www.omdbapi.com/?apikey=a0363d11&s=${movie}`);

    let data = await res.json();
    // console.log(data);
    return data.Search;
    
    }
    catch(err)
    {
        console.log("err",err)
    }
}

let movies_div = document.getElementById("movies");

function displayData(movies)
{
    movies_div.innerHTML = null;
    if(movies_div != null)
    {
        movies_div.style.backgroundColor = "black"
    }
    movies.map(function(elem){
        let div = document.createElement("div")
        div.style.display = "flex"
        let name = document.createElement("p");
        name.innerText = elem.Title;
        name.style.color = "white"
        let poster = document.createElement("img")
        poster.src = elem.Poster;
        poster.style.width = "50px"

        div.append(name,poster);
        movies_div.append(div)
    })
}