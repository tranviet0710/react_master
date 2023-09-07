function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseURL);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send(null);
}

// CALLBACK HELL
/**
 httpGetAsync('https://picsum.photos/200/300', (data) => {
    document.getElementById('img1').src = data;

    httpGetAsync('https://picsum.photos/200/300', (data) => {
        document.getElementById('img2').src = data;

        httpGetAsync('https://picsum.photos/200/300', (data) => {
            document.getElementById('img3').src = data;
        })
    })
})
**/

// PROMISES
const currentPromise = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/200/300', resolve);
})

const promise2 = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/200/300', resolve);
})

const promise3 = new Promise((resolve, reject) => {
    httpGetAsync('https://picsum.photos/200/300', resolve);
})

currentPromise
    .then((data) => {
        document.getElementById('img1').src = data;
        return promise2;
    })
    .then((data) => {
        document.getElementById('img2').src = data;
        return promise3;
    })
    .then((data) => {
        document.getElementById('img3').src = data;
    })
    .catch((error) => {
        console.log(error);
    })