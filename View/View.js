
class View {
    constructor() {
    }
    limitWords(textToLimit, wordLimit){
        var finalText = "";
        var text2 = textToLimit.replace(/\s+/g, ' ');
        var text3 = text2.split(' ');
        var numberOfWords = text3.length;
        var i=0;

        if(numberOfWords > wordLimit){
            for(i=0; i< wordLimit; i++)
                finalText = finalText+" "+ text3[i]+" ";

            return finalText+"…";
        }
        else return textToLimit;
    }
    newsCard = (model) => {
       return `
       <div class="col-md-3 custom-row">
            <div class="card">
                <div class="img-box">
                    <img src="${model.urlToImage}" class="img-fluid"/>
                </div>
                <div class="card-body">
                    <h6>${model.title}</h6>
                    <p class="text-justify">${this.limitWords(model.description, 20)}</p>
                    <button type="button" class="btn btn-primary w-50" 
                        onClick="window.location.href='${model.url}'"
                    >Read More</button>
                </div>
            </div>
        </div>`
    }
} export default View;