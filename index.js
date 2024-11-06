async function generatememe(){
let data = await fetch("https://meme-api.com/gimme/wholesomememes").then((response)=>{
return response.json()}
);


document.getElementsByTagName("img")[0].setAttribute("src",data.url);
document.getElementsByClassName("acc")[0].innerHTML=data.author;
document.getElementsByClassName("add")[0].innerHTML=data.title;
}

