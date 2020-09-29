
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
                    <img src="${model.urlToImage ? model.urlToImage : 'https://image.flaticon.com/icons/png/512/21/21601.png'}" 
                    class="img-fluid ${!model.urlToImage ? "nohover" :""}"
                    />
                </div>
                <div class="card-body">
                    <h6>${model.title}</h6>
                    <p class="text-justify">${model.description ? this.limitWords(model.description, 20): ''}</p>
                    <a type="button" class="btn btn-primary w-50" 
                        href="${model.url}" target="_blank"
                    >Read More</a>
                </div>
            </div>
        </div>`
    }

    covidViews = (model1, model2) => {
        return `<div class="covid-box ">
            <p>DATA COVID</p>
        <div class="covid-box_counter" id="confirmed">
            <h1>TERKONFIRMASI</h1>
            <p id="number">${model1.jumlah_positif ? model1.jumlah_positif : 0 }</p>
            <p id="number-info">+${model2.jumlah_positif} Kasus</p>
        </div> 
        <div class="covid-box_counter" id="active">
            <h1>KASUS AKTIF</h1>
            <p id="number">${model1.jumlah_dirawat ? model1.jumlah_dirawat : 0}</p>
            <p id="number-info">${(parseInt(model1.jumlah_dirawat, 10) / parseInt(model1.jumlah_positif) * 100).toFixed(2)}%
                dari Terkonfirmasi
            </p>
        </div> 
        <div class="covid-box_counter" id="recover">
            <h1>SEMBUH</h1>
            <p id="number">${model1.jumlah_sembuh ? model1.jumlah_sembuh : 0}</p>
            <p id="number-info">${(parseInt(model1.jumlah_sembuh, 10) / parseInt(model1.jumlah_positif) * 100).toFixed(2)}%
            dari Terkonfirmasi
            </p>
        </div> 
        <div class="covid-box_counter" id="died">
            <h1>MENINGGAL</h1>
            <p id="number">${model1.jumlah_meninggal ? model1.jumlah_meninggal : 0}</p>
            <p id="number-info">${(parseInt(model1.jumlah_meninggal, 10) / parseInt(model1.jumlah_positif,10) * 100).toFixed(2)}%
            dari Terkonfirmasi
            </p>
        </div> 
    </div>
    <!--  <div class="toggle-covid " id="toggleCovid">
        <div class="left ">
            <i class="fa fa-chevron-left chevron" aria-hidden="true"></i>
        </div>
        <div class="right d-none">
            <i class="fa fa-chevron-right chevron" aria-hidden="true"></i>
        </div>
    </div> -->
    `
    }
} export default View;