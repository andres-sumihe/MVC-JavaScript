
class View {
    constructor() {
    }
    newsCard = (model) => {
       return `
       <div class="col-md-3 custom-row">
            <div class="card">
                <img src="${model.urlToImage}" class="img-fluid"/>
                <div class="card-body">
                    <h6>${model.title}</h6>
                    <p class="text-justify">${model.description}</p>
                    <button type="button" class="btn btn-primary w-50" 
                        onClick="window.location.href='${model.url}'"
                    >Read More</button>
                </div>
            </div>
        </div>`
    }
} export default View;