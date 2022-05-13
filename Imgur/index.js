async function makeApiCall(){
    try {
        let res = await fetch('https://api.unsplash.com/photos/?client_id=u6wEwe8Z6O3D74c9TUArDxu4pPExu2fjKq1W6MuXonc&per_page=50');
        let data = await res.json();
        // console.log(data)

        appendPictures(data)


    } catch (error) {
        console.log(error);
    }
}

makeApiCall()


function appendPictures(data){

    data.forEach(element => {
        let div = document.createElement('div');
        div.style.width = "60%"
        div.style.margin = "auto"

        let image = document.createElement('img');
        image.src = element.urls.small;
        image.style.width = "250px"
        image.style.height = "200px"

        let p = document.createElement('p');
        p.textContent = element.user.name;

        div.append(image,p);

        document.getElementById("container2").append(div);
        
    });

}