// const api_url = "https://api.quotable.io/random"

// async function getQuote(url){
//     const response = await fetch(url);
//     var data = await response.json();
// }
var quote ;

function api_call(){
    fetch("https://api.quotable.io/random")
    .then(quote => quote.json())
    .then(data => {
    quote = document.querySelector("#atr");
    quote.innerHTML = data.content;
    document.querySelector("#atn").innerHTML = data.author
    document.querySelector(".span").innerHTML = data.dateAdded
    })
}
document.querySelector("#btnN").addEventListener("click",api_call)


