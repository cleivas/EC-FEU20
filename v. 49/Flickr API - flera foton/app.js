const KEY = '';
let searchText = 'flower';

const url = `https://www.flickr.com/services/rest/?api_key=${KEY}&method=flickr.photos.search&text=${searchText}&format=json&nojsoncallback=1&per_page=5&page=1`;

fetch(url).then(
    function(response){
        console.log(response);
        return response.json();
    }
).then(
    function(data){
        console.log(data.photos.photo);
        getImageUrl(data.photos.photo); //array med fem element
    }
)

//här ska vi pussla ihop bild urlen
function getImageUrl(photoArray){
    let photos = photoArray;
    let size = 'q';
    let imgUrls = [];

    for(let photo of photos){
        let url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

        imgUrls.push(url);
    }

    displayImg(imgUrls);
}

//visa bildern
function displayImg(urls){
    let body = document.querySelector('body');

    for(let url of urls){
        let img = document.createElement('img');
        img.src = url;
        body.appendChild(img);
    }

}