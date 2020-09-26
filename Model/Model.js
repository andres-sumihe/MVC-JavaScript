class Model {
    constructor() {
       
    }
        // 53247612da5c47c9a7d3f1625dfae99e
    async getArticles() {
        let result = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=53247612da5c47c9a7d3f1625dfae99e")
        .then(response => response.json());
        return result.articles;
    
    }
    async getDogs(){
        const response = await fetch('https://barkwireapi.brooks.now.sh/dogs');
        return response.json();
    }
    async getDog(id){
        const response = await fetch(`https://barkwireapi.brooks.now.sh/dogs/${id}`);
        return response.json();
    }
} export default Model;