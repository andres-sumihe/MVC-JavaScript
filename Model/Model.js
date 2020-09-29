class Model {
    constructor() {
       
    }
        // 53247612da5c47c9a7d3f1625dfae99e
    async getArticles(url) {
        let result = await fetch(url)
        .then(response => response.json());
        return result.articles;
    
    }

    async getCovid(url) {
          let data = await fetch(url)
          .then(response => response.json());
          return data;
    }

    
} export default Model;