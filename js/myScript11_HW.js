var retData;
var category="science"
var myUrl = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=64ca036cd08f40d5b35c4e4de8fd804e"
var categories = document.getElementsByClassName("nav-link-min");
var country ="us"
var countries = document.getElementsByClassName("a-decor");
var col = ""
var data = document.getElementById("data");
console.log(countries);

getLinkData();

for(var i=0;i<categories.length;i++)
{
    categories[i].addEventListener("click",function(e)
 {
    category= e.target.innerHTML;
    getLinkData()
 })


}

for(var i=0;i<countries.length;i++)
{
    countries[i].addEventListener("click",function(e)
 {
    country= e.target.name;
    getLinkData()
 })


}




function getLinkData(){
var req = new XMLHttpRequest();

myUrl = "https://newsapi.org/v2/top-headlines?country="+country+"&category="+category+"&apiKey=64ca036cd08f40d5b35c4e4de8fd804e"


console.log(myUrl);
req.open("GET", myUrl)

req.onreadystatechange = function () {

    if (req.readyState == 4) {
        console.log(req.readyState);
        retData = JSON.parse(req.response);
        console.log(retData);
        display();
    }
}
req.send();
}



//console.log(data);

function display() {
    for (var i = 0; i < retData.articles.length; i++) {
        col += `<div class="col-md-4">
            <h2>` + retData.articles[i].title + `</h2>
            <p>` + retData.articles[i].description + `</p>
            <img class="img-fluid" src=` + retData.articles[i].urlToImage + `/>
            </div>`

        //  console.log(col);
        // 
    }
    //  console.log(col);
    data.innerHTML = col;
}
