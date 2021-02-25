const NewsApi = require('newsapi');
const { isFunctionTypeNode } = require('typescript');
const newsapi = new NewsApi('2f2ef6f079f6471c9e88edf4e0d4d2e4');
let today = new Date();
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
global.document = new JSDOM('\views\index.html').window.document;
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const templateSource = document.getElementById('Grid').innerHTML;
const template = Handlebars.compile(templateSource);
const Container = document.getElementById('Grid');


function getNews(){
    newsapi.v2.everything({
        q:'bitcoin', 
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk, techcrunch.com',
        language: 'en',
        sortBy: 'relevancy',
    }).then(response =>{
        console.log(response);
            document.getElementById('Grid').innerHTML = template({
                news: response.articles,
            });
            Container.style.display = "flex";
    });
}


module.exports = {getNews: getNews};