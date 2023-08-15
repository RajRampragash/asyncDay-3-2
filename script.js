var apiCommon = "https://imdb-api.com/en/API/SearchMovie/k_he1farmc/";
//console.log("here script");
//function to get country details 
async function imdb(api) {

    try {
        var resp = await fetch(api);
        var data = await resp.json();

        //console.log("in imdb",data);
        var parent = document.querySelector('#parent-div');
        parent.innerHTML = "";
        for (i of data.results) {
            createCard(i);
        }
    }
    catch (err) {
        console.log("error in fetching ", err);
    }

}

var form = document.querySelector('#search-form')
form.addEventListener('submit', (e) => {
    e.preventDefault();

    var term = document.querySelector('#search-term');
    var s_term = term.value;
    s_term = s_term.trim()
    var api = apiCommon + s_term;
    //console.log(api);
    imdb(api);
})

function createCard(i) {
    try {

        var cardWrap = document.createElement('div');
        cardWrap.classList.add('card')
        cardWrap.style.width = "20rem"
        cardWrap.style.height = "25rem"

        var imgtop = document.createElement('img')
        imgtop.classList.add('card-img-top')
        imgtop.style.width = '100%'
        imgtop.style.height = '100%'
        imgtop.style.border = '1px solid black';
        if (i.image != "")
            imgtop.setAttribute('src', i.image)
        else
            imgtop.setAttribute('src', "https://eagle-sensors.com/wp-content/uploads/unavailable-image-400x300.jpg")

        var hd1 = document.createElement('h5');
        hd1.classList.add('card-title')
        hd1.innerHTML = "<br>" + i.title;

        var capi = document.createElement('label');
        capi.classList.add("card-label-capi")
        capi.innerText = i.description;

        //Appending to Card
        cardWrap.append(imgtop)
        cardWrap.append(hd1)
        cardWrap.append(capi)

        //Appending card to parent
        var parent = document.querySelector('#parent-div')
        parent.append(cardWrap)
    }
    catch (err) {
        console.log("error in ", i, err);
    }
}