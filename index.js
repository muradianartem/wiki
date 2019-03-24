
const select = document.querySelector('.pictures')
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const title = 'Alfred_Nobel';
const url = `action=query&format=json&prop=images&titles=${title}`;
const uri = 'http://en.wikipedia.org/w/api.php?';


class WikiApi {
    constructor() {

    }

    _apiBase = proxyUrl + uri;

    async getInfo(url){
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new  Error (`Could not fetch ${this._apiBase}${url}`);
        }
        const body = await res.json();
        return body;
    }


}

const wikiAlbert = new WikiApi();



wikiAlbert.getInfo(url).then((body) => console.log(body));


wikiAlbert.getInfo(url).then((body) => select.innerHTML = `
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Alfred_Nobel3.jpg/75px-Alfred_Nobel3.jpg">`);


