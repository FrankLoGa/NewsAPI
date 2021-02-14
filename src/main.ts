declare var Handlebars: any;
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


const templateSource = document.getElementById('Grid').innerHTML;
const template = Handlebars.compile(templateSource);
const Container = document.getElementById('Grid');
const sInput = <HTMLInputElement> document.getElementById('sInput');
const searchBtn = document.getElementById('searchButton');


searchBtn.onclick = function(){
  let url = 'http://newsapi.org/v2/everything?'+`q=${sInput.value}&`+`from=${date}&`+'sortBy=popularity&'+'apiKey=2f2ef6f079f6471c9e88edf4e0d4d2e4';
  let req = new Request(url);



  fetch(req).then(function (response) {
    return response.json();
  }).then((data)=>{
      console.log(data);
      document.getElementById('Grid').innerHTML = template({
          news: data.articles,
      });
      Container.style.display = "flex";
  });
};








 
  