import Controller from './Controller/Controller.js'
import Router from './lib/Router.js';
import Model from './Model/Model.js';
import View from './View/View.js';

const controller = new Controller('#app');
const API = new Model();
const router = new Router(controller);
const view = new View();
const topHeadline = "https://newsapi.org/v2/top-headlines?country=id&apiKey=53247612da5c47c9a7d3f1625dfae99e";
const business = "https://newsapi.org/v2/everything?q=business&apiKey=53247612da5c47c9a7d3f1625dfae99e";
const tech = "https://newsapi.org/v2/everything?q=tech&apiKey=53247612da5c47c9a7d3f1625dfae99e";
const covid = "https://newsapi.org/v2/everything?q=covid&apiKey=53247612da5c47c9a7d3f1625dfae99e";

const search = document.getElementById('search');
let searchText;
function getSearch(){
    searchText = search.value;
    console.log(searchText)
    if(searchText !=="") {
        controller.addComponent({
            name: `${searchText}`,
            model: {
                articles: []
            },
        
            view(model) {
                return `<div class="row d-flex justify-content-center">
                ${model.articles.map(item => {
                return `${view.newsCard(item)}`
                })}
            </div>`;
            },
        
            async controller(model){
                var url = `https://newsapi.org/v2/everything?q=${searchText}&apiKey=53247612da5c47c9a7d3f1625dfae99e`
                const articles = await API.getArticles(url);
                model.articles = articles;
                console.log(articles)
            }
        
        })
        
        router.addRoute(`${searchText}`, `^#/news/search/${searchText}$`);
        window.location.href = `#/news/search/${searchText}`
    } else {
        null
    }
}

let clickButton = document.getElementById('searchButton').addEventListener('click', getSearch, false);


controller.addComponent({
    name: 'news',
    model: {
        articles: []
    },

    view(model) {
        return `<div class="row d-flex justify-content-center">
          ${model.articles.map(item => {
           return `${view.newsCard(item)}`
          })}
      </div>`;
    },

    async controller(model){
        // const articles = await API.getArticles(topHeadline);
        // model.articles = articles;
    }
})

controller.addComponent({
    name: 'Tech',
    model: {
        articles: []
    },

    view(model) {
        return `<div class="row d-flex justify-content-center">
          ${model.articles.map(item => {
           return `${view.newsCard(item)}`
          })}
      </div>`;
    },

    async controller(model){
        // const articles = await API.getArticles(tech);
        // model.articles = articles;
    }
})

controller.addComponent({
    name: 'Business',
    model: {
        articles: []
    },

    view(model) {
        return `<div class="row d-flex justify-content-center">
          ${model.articles.map(item => {
           return `${view.newsCard(item)}`
          })}
      </div>`;
    },

    async controller(model){
        // const articles = await API.getArticles(business);
        // model.articles = articles;
    }
})

controller.addComponent({
    name: 'COVID',
    model: {
        articles: []
    },

    view(model) {
        return `<div class="row d-flex justify-content-center">
          ${model.articles.map(item => {
           return `${view.newsCard(item)}`
          })}
      </div>`;
    },

    async controller(model){
        // const articles = await API.getArticles(covid);
        // model.articles = articles;
    }
})

router.addRoute('news', '^#/$');
router.addRoute('Tech', '^#/category/Tech$');
router.addRoute('Business', '^#/category/Business$');
router.addRoute('COVID', '^#/category/Covid$');
