import Controller from './Controller/Controller.js'
import Router from './lib/Router.js';
import Model from './Model/Model.js';
import View from './View/View.js';

const controller = new Controller('#app');
const API = new Model();
const router = new Router(controller);
const view = new View();

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
        const articles = await API.getArticles();
        model.articles = articles;
        console.log(articles)
    }
})

router.addRoute('news', '');
